import { useAuthStore } from "../stores/authStore";

let isRefreshing = false;
let refreshPromise = null;

async function refreshToken() {
  const res = await fetch("http://localhost:8080/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Refresh failed");

  const data = await res.json();
  useAuthStore.getState().setAccessToken(data.accessToken);
}

export async function authFetch(input, init = {}) {
  const { accessToken } = useAuthStore.getState();

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    credentials: "include",
  });

  if (response.status !== 401) return response;

  // 401 → 토큰 갱신 시도 (동시 요청 중복 방지)
  if (!isRefreshing) {
    isRefreshing = true;
    refreshPromise = refreshToken().finally(() => {
      isRefreshing = false;
    });
  }

  try {
    await refreshPromise;
  } catch {
    useAuthStore.getState().logout();
    throw new Error("Unauthorized");
  }

  const newToken = useAuthStore.getState().accessToken;

  return fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      ...(newToken ? { Authorization: `Bearer ${newToken}` } : {}),
    },
    credentials: "include",
  });
}
