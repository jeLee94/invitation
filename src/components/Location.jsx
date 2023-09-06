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
        zoom: 14,
      });

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(37.545632, 127.04245),
        map: map,
      });
    };

    document.head.appendChild(script);
    // https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false" \
    // -H "Authorization: KakaoAK${process.env.REACT_APP_KAKAO_MAP_KEY}`}

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
        <SubAContent href="tel:0234090123">📞 02-3409-0123</SubAContent>
      </WhereWrapper>
      <MapStyledDiv id="map" />
      <NavigationButtons>
        <NavigationButton
          href={`https://map.naver.com/v5/directions/-/14126848.929436948,4508870.622796846,보테가마지오,12080440,PLACE_POI/-/car`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="./icon/navermap.webp" alt="naver" />
          네이버 지도
        </NavigationButton>
        <NavigationButton
          href={`https://map.kakao.com/link/to/보테가마지오,37.545632,127.04245`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="./icon/kakao_map.png" alt="kakaomap" />
          카카오맵
        </NavigationButton>
        {/* <NavigationButton
          href={`https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false Authorization: KakaoAK ${process.env.REACT_APP_KAKAO_MAP_KEY}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="./icon/kakaonavi.png" alt="kakonavi" />
          카카오내비
        </NavigationButton> */}
      </NavigationButtons>

      <Content
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          color: "#6b6b6b",
        }}
        onClick={() =>
          navigator.clipboard
            .writeText("서울시 성동구 서울숲2길 32-14 갤러리아포레 G층(B2)")
            .then(() => {
              alert(`주소가 복사되었습니다!`);
            })
        }
      >
        <Icon src="./icon/copy.png" alt="copy" />
        <div style={{ fontFamily: "Pretendard-Regular", fontSize: "13px" }}>
          주소 복사하기
        </div>
      </Content>
      <AddressContainer>
        <SubContent>
          <Icon src="./icon/parking.png" alt="parking" />
          주차
        </SubContent>
        <ContentWrapper>
          <Content>건물 내 B3 ~ B7 2시간 무료주차</Content>
          <Content>안내 데스크에서 주차 등록 필요</Content>
        </ContentWrapper>
        <Line />

        <SubContent>
          <Icon src="./icon/subway.png" alt="parking" />
          지하철
        </SubContent>
        <ContentWrapper>
          <Content>
            <YellowCircle />
            분당선 서울숲역 5번출구 도보 5분
          </Content>
          <Content>
            <GreenCircle />
            2호선 뚝섬역 8번출구 도보 10분
          </Content>
        </ContentWrapper>
        <Line />

        <SubContent>
          <Icon src="./icon/bus.png" alt="parking" />
          버스
        </SubContent>
        <ContentWrapper>
          <Content>성동구민종합체육센터 정류장(양방향)</Content>
          <Content>121, 2013, 2224, 2413, 성동13</Content>
          <br />
          <Content>뚝섬역 8번출구(성수역 방면 버스)</Content>
          <Content>2016</Content>
        </ContentWrapper>
      </AddressContainer>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 12px;
  font-family: "GangwonEdu_OTFLightA";
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
  overflow: hidden;
  margin-top: 1rem;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 50px 0 20px 0;
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
  line-height: 1.6rem;
`;

const SubContent = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 10px 0;
  color: #39563b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SubAContent = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 10px 0;
  color: #39563b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0;
  text-align: center;
  font-family: "MapoFlowerIsland";
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
  margin: 0;
`;

//초록색 동그라미
const GreenCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00a650;
  margin: 0;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 1rem rgba(179, 179, 179, 0.2);
  width: 95%;
  background-color: #eee;

  margin: 0 auto 10px auto;
`;

const NavigationButton = styled.a`
  padding: 20px 20px;
  background-color: #eee;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  min-width: 127px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;

  border: 0px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;
