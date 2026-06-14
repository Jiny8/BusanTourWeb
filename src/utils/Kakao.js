import React, { useEffect } from "react";

function Kakao({ X, Y }) {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) return;

    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(X, Y),
      level: 3,
    };
    new window.kakao.maps.Map(container, options);
  }, [X, Y]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px", borderRadius: "10px", marginTop: "1.5rem" }}
    />
  );
}

export default Kakao;
