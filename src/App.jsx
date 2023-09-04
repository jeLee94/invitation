import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Thanks from "./components/Thanks";
import Location from "./components/Location";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <head>
        <style>
          {`
          @font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`}
        </style>
        <title>청첩장</title>
        <meta name="description" content="홍길동 & 박영희의 청첩장" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Header />
      <Thanks />
      <Contact />
      <Gallery />
      <Location />

      {/* 이곳에 다른 컴포넌트나 내용을 추가할 수 있습니다. */}
    </div>
  );
}
