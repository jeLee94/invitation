import React from "react";
import styled from "styled-components"; // 'styled' import 오류 수정

const Calendar = () => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = Array(31)
    .fill(0)
    .map((_, i) => i + 1); // 예시로 31일까지 표시합니다.

  return (
    <CalendarContainer>
      <Title>2023 | 10 | 09</Title>
      <SubTitle>월요일 오후 2시</SubTitle>
      <CalendarWrapper>
        <table className="calendar" id="calendar">
          <thead>
            <tr>
              {days.map((day, idx) => (
                <DayTh key={day} isSunday={idx === 0} isSaturday={idx === 6}>
                  {day}
                </DayTh>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map((_, weekIndex) => (
                <tr key={weekIndex}>
                  {Array(7)
                    .fill(0)
                    .map((_, dayIndex) => {
                      const dateIndex = weekIndex * 7 + dayIndex;
                      if (dateIndex >= dates.length)
                        return <td key={dayIndex}></td>;
                      const currentDate = dates[dateIndex];
                      return (
                        <DateTd
                          key={dayIndex}
                          isSunday={dayIndex === 0}
                          isSaturday={dayIndex === 6}
                          isSpecialDate={dates[dateIndex] === 9}
                          isHighlighted={[2, 3, 9].includes(currentDate)}
                        >
                          {currentDate}
                        </DateTd>
                      );
                    })}
                </tr>
              ))}
          </tbody>
        </table>
      </CalendarWrapper>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 0;
`;

const CalendarWrapper = styled.div`
  font-family: "GangwonEdu_OTFLightA";
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 35px auto;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-color: #eee;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
`;

const DayTh = styled.th`
  color: ${(props) =>
    props.isSunday ? "#cd7171" : props.isSaturday ? "#8484f5" : "#505050"};
  padding: 10px;
`;

const DateTd = styled.td`
  padding: 7px;
  text-align: center;
  color: ${(props) =>
    props.isSunday || props.isHighlighted
      ? "#cd7171"
      : props.isSaturday
      ? "#8484f5"
      : "black"};
  border: ${(props) =>
    props.isSpecialDate ? "1px solid #f69696" : "transparent"};
  border-radius: ${(props) => (props.isSpecialDate ? "50%" : "0")};
`;
const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0;
  text-align: center;
  font-family: "GangwonEdu_OTFLightA";
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 10px 0;
  text-align: center;
  font-family: "MapoFlowerIsland";
`;
