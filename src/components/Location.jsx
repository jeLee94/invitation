// components/Location.jsx
import React, { useEffect } from "react";
import { styled } from "styled-components";

const Location = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_API_KEY}`;
    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.545632, 127.04245), // 갤러리아포레의 위도, 경도로 변경해주세요
        zoom: 100,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.545632, 127.04245), // 마커 위치도 갤러리아포레의 위도, 경도로 변경해주세요
        map: map,
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LocationWrapper>
      <MapStyledDiv id="map" />
      <AddressContainer>
        <TitleWrapper>
          <Title>보테가마지오</Title>
          <SubTitle>
            서울시 성동구 서울숲2길 32-14 갤러리아포레 G층(B2)
          </SubTitle>
          <Content>02-3409-0123</Content>
        </TitleWrapper>
        <Line />
        <SubTitle>주차</SubTitle>
        <Content>건물 내 B3 ~ B7 2시간 무료주차(주차등록 필요)</Content>
        <Line />
        <SubTitle>지하철</SubTitle>
        <Content>분당선 서울숲역 5번출구 도보 5분</Content>
        <Content>2호선 뚝섬역 8번출구 도보 10분</Content>
        <Line />
        <SubTitle>버스</SubTitle>
        <Content>121,2013,2224,2413, 성동13</Content>
        <Content>- 성동구민종합체육센터 정류장(양방향)</Content>
        <Content>2016</Content>
        <Content>- 뚝섬역 8번출구(성수역 방면 버스)</Content>
      </AddressContainer>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  /* padding: 50px 0; */
  font-family: "MapoFlowerIsland";
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  margin: 10px 0;
`;

const MapStyledDiv = styled.div`
  width: 25rem;
  height: 31.25rem;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 0;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 0;
`;
