// components/Location.jsx
import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_API_KEY}`;
    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.5665, 126.978), // 갤러리아포레의 위도, 경도로 변경해주세요
        zoom: 10,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.5665, 126.978), // 마커 위치도 갤러리아포레의 위도, 경도로 변경해주세요
        map: map,
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default Location;
