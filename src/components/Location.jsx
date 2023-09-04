// components/Location.jsx
import React, { useEffect } from "react";
import { styled } from "styled-components";

const Location = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_API_KEY}`;
    script.onload = () => {
      const map = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(37.545632, 127.04245),
        zoom: 17,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.545632, 127.04245),
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
      <SubTitle>L O C A T I O N</SubTitle>
      <Title>오시는 길</Title>
      <WhereWrapper>
        <Where>보테가마지오</Where>
        <SubWhere>
          서울시 성동구 서울숲2길 32-14
          <br /> 갤러리아포레 G층(B2)
        </SubWhere>
        <SubContent>Tel. 02-3409-0123</SubContent>
      </WhereWrapper>
      <MapStyledDiv id="map" />
      <AddressContainer>
        <SubContent>주차</SubContent>
        <Content>건물 내 B3 ~ B7 2시간 무료주차(주차등록 필요)</Content>
        <Line />
        <SubContent>지하철</SubContent>
        <Content>
          <YellowCircle />
          분당선 서울숲역 5번출구 도보 5분
        </Content>
        <Content>
          <GreenCircle />
          2호선 뚝섬역 8번출구 도보 10분
        </Content>
        <Line />
        <SubContent>버스</SubContent>
        <Content>121, 2013, 2224, 2413, 성동13</Content>
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
  padding: 0 12px;
  font-family: "MapoFlowerIsland";
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  margin: 10px 0;
`;

const MapStyledDiv = styled.div`
  max-width: 24rem;
  height: 24rem;
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
  padding: 50px 0;
  margin: 0 auto;
`;

const WhereWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
  padding: 12px 0;
`;

const Where = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0;
`;

const SubWhere = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 20px 0;
  color: #6d6d6d;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 0;
  color: #515151;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const SubContent = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 0;
  color: #292929;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 20px 0;
  text-align: center;
`;

//노란색 동그라미
const YellowCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fabd00;
  margin: 0 auto;
`;

//초록색 동그라미
const GreenCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00a650;
  margin: 0 auto;
`;
