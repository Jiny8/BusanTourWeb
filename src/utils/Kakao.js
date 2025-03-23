
import React ,{useEffect} from "react";

const { kakao } = window;

function Kakao ({ X, Y }){

    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(X, Y), //지도의 중심좌표
            level: 3 //지도 확대 레벨
        };
        new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    }, [])



    return(
        <div id="map" style={{
            width: '1000px',
            height: '500px'
        }}></div>
    )
}
export default Kakao;