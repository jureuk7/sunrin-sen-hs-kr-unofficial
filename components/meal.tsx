import React from "react";
import styled from "styled-components";

const Meal = ({ meal }: any) => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        String(date.getMonth() + 1).length === 1
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const day =
        String(date.getDate()).length === 1
            ? `0${date.getDate()}`
            : date.getDate();
    const today = `${year}${month}${day}`;
    return (
        <MealContainer>
            <MealDate>
                <MealPin today={meal.MLSV_YMD === today} />
                <MealDateString today={meal.MLSV_YMD === today}>
                    {meal.MLSV_YMD.slice(4, 6)}월 {meal.MLSV_YMD.slice(6, 8)}일
                </MealDateString>
                {meal.MLSV_YMD === today ? <MealToday>오늘</MealToday> : ""}
            </MealDate>
            <Spacer size="22px" />
            <MealCard>
                {meal.DDISH_NM.split("<br/>").map((line: string) => (
                    <MealLine key={line}>
                        {line.replace(/\s\s\([^)]*\)/gi, "")}
                    </MealLine>
                ))}
            </MealCard>
        </MealContainer>
    );
};

export default Meal;

const MealToday = styled.div`
    width: 38px;
    height: 26px;
    background: #f1f7ff;
    border-radius: 5px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #2684f9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealDate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MealDateString = styled.div<{ today: boolean }>`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${(props) => (props.today ? "#2684F9" : " #758395")};
`;

const MealPin = styled.div<{ today: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => (props.today ? "#2684F9" : "none")};
    border: ${(props) => (props.today ? "none" : "1px solid #758395;")};
`;

const MealCard = styled.div`
    width: 320px;
    height: 250px;
    background: #ffffff;
    border: 1px solid #f4f5f5;
    box-shadow: 0px 0px 10px rgba(221, 224, 230, 0.25);
    border-radius: 9px;
    padding: 25px;
`;

const MealLine = styled.div`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 7px;
    color: #75797e;
`;

const MealContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Spacer = (props: any) => {
    return <div style={{ height: `${props.size}` }} />;
};
