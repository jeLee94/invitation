import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Thanks from "./components/Thanks";
import Location from "./components/Location";
import Contact from "./components/Contact";
import { Share } from "./components/Share";
import Calendar from "./components/Calendar";
import Account from "./components/Account";
import Dday from "./components/Dday";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fcf8f8c9" }}>
      <head>
        <style>
          {`
          @font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
          @font-face {
    font-family: 'GangwonEdu_OTFLightA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
            @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ghanachoco';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'BookkMyungjo-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

`}
        </style>
      </head>
      <Header />
      <Thanks />
      <Contact />
      <Gallery />
      <Calendar />
      <Dday />
      <Location />
      <Account />
      <Share />

      {/* 이곳에 다른 컴포넌트나 내용을 추가할 수 있습니다. */}
    </div>
  );
}
