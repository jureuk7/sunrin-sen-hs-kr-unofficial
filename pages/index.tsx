import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import { getMeal } from "../api/basic/getMeal";
import Header from "../components/header";
import Announce from "../components/announce";
import Meal from "../components/meal";
import Footer from "../components/footer";

const Home = () => {
    const { data } = useQuery(["meals"], getMeal);

    return (
        <>
            <Head>
                <title>선린인터넷고등학교</title>
            </Head>
            <Header />
            <Banner>
                <BannerContainer>
                    <BannerSubtitle>
                        4차 산업혁명의 주역을 양성하는 학교
                    </BannerSubtitle>
                    <BannerTitle>
                        세계로 미래로 꿈을 펼치는
                        <br />
                        선린인터넷고등학교
                    </BannerTitle>
                </BannerContainer>
            </Banner>
            <Spacer size="80px" />
            <Main>
                <Container>
                    <SectionTitle>
                        공지/행사
                        <AnnounceIcon className="material-symbols-rounded">
                            campaign
                        </AnnounceIcon>
                    </SectionTitle>
                    <Spacer size="10px" />
                    <SectionDescription>
                        학교의 공지사항/행사를 확인하세요!
                    </SectionDescription>
                    <Spacer size="80px" />
                    <AnnounceList>
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                        <Announce
                            title="2023학년도 신입생 입학 특별전..."
                            date="2021.01.01"
                            content={
                                "2023학년도 선린인터넷고등학교 신입생 입학 특별전형 지원자 자가검진(11.26.(토)~11.30.(수)) 실시방법 및 면접 유의사항 자료를 [학교 홈..."
                            }
                        />
                    </AnnounceList>
                    <Spacer size="90px" />
                    <SectionTitle>
                        오늘의 급식
                        <AnnounceIcon className="material-symbols-rounded">
                            restaurant
                        </AnnounceIcon>
                    </SectionTitle>
                    <Spacer size="10px" />
                    <SectionDescription>
                        오늘 선린인터넷고의 급식을 확인하세요!
                    </SectionDescription>
                    <Spacer size="80px" />
                    <MealList>
                        {data &&
                            data.map((meal: any, index: number) => {
                                return <Meal meal={meal} key={index} />;
                            })}
                    </MealList>
                    <Spacer size="90px" />
                    <SectionTitle>
                        선린 갤러리
                        <AnnounceIcon className="material-symbols-rounded">
                            videocam
                        </AnnounceIcon>
                    </SectionTitle>
                    <Spacer size="10px" />
                    <SectionDescription>
                        선린인터넷고의 멋진 모습들을 한곳에!
                    </SectionDescription>
                    <Spacer size="80px" />
                </Container>
            </Main>
            <Footer />
        </>
    );
};

const MealList = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: 5px;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 14px 14px transparent;
        background: #217af4;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 14px 14px transparent;
        background: rgba(33, 122, 244, 0.1);
        border-radius: 10px;
    }
`;

const AnnounceList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
`;

const AnnounceIcon = styled.span`
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
    font-size: 56px;
    color: #2684f9;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
`;

const Spacer = (props: any) => {
    return <div style={{ height: `${props.size}` }} />;
};

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Main = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

const BannerSubtitle = styled.div`
    font-weight: 600;
    font-size: 31px;
    line-height: 37px;
    color: #e4e4e4;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    animation: ${slideIn} 1s;
`;

const BannerTitle = styled.div`
    font-weight: 600;
    font-size: 46px;
    color: #ffffff;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    text-align: center;

    animation: ${slideIn} 1s;
`;

const SectionTitle = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-weight: 800;
    font-size: 40px;
    color: #191a1b;
`;

const SectionDescription = styled.div`
    font-weight: 500;
    font-size: 17px;
    color: #adadb7;
`;

const Banner = styled.div`
    width: 100%;
    height: 804px;
    background-image: url("/images/sunrinbg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 7px solid #2684f9;
`;

const BannerContainer = styled.div`
    width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export default Home;
