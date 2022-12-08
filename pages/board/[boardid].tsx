import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query";
import Header from "@components/header";
import Footer from "@components/footer";
import category from "constants/basic";
import { useRouter } from "next/router";

const Board = () => {
    const router = useRouter();
    const boardid = Number(router.query.boardid);
    const board = category.find((item: any) => item.id === boardid);
    return (
        <>
            <Head>
                <title>선린인터넷고등학교</title>
            </Head>
            <Header />
            <Banner>
                <BannerContainer>
                    <BannerTitle>{board?.name}</BannerTitle>
                    <BannerSubtitle>{board?.description}</BannerSubtitle>
                </BannerContainer>
            </Banner>
            <Main>
                <Container>
                    <BoardSelector>
                        <CategoryName>{board?.name}</CategoryName>
                        <BoardList>
                            {board?.submenus.map((menu: any, index: number) => {
                                return (
                                    <BoardItem
                                        key={index}
                                        active={boardid === menu.id}
                                    >
                                        {menu.name}
                                    </BoardItem>
                                );
                            })}
                        </BoardList>
                    </BoardSelector>
                    <Post>
                        <Spacer size="56px" />
                        <PostTitle>
                            2022년도 선린인터넷고 특별전형 모집요강 안내
                        </PostTitle>
                        <Spacer size="13px" />
                        <PostInfo>
                            작성자 : 김선생 ㆍ 작성일 : 2022.11.03
                        </PostInfo>
                        <Spacer size="26px" />
                        <PostContent></PostContent>
                        <Spacer size="90px" />
                        <BlueText>첨부파일 (1개)</BlueText>
                        <Spacer size="12px" />
                        <FileBox>
                            <FileIcon className="material-symbols-rounded">
                                attach_file
                            </FileIcon>
                            <FileLabel>
                                2022년도 선린인터넷고 특별전형 모집요강.pdf
                            </FileLabel>
                        </FileBox>
                        <Spacer size="77px" />
                    </Post>
                </Container>
            </Main>
            <Footer />
        </>
    );
};

const FileIcon = styled.span`
    font-size: 24px;
    color: #5f6a78;
`;

const FileBox = styled.div`
    width: 708px;
    height: 57px;
    background: #f9f9fc;
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
`;

const FileLabel = styled.div`
    color: #5f6a78;
    font-size: 17px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const BlueText = styled.div`
    font-weight: 500;
    font-size: 19px;
    color: #2684f9;
`;

const PostContent = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`;

const PostTitle = styled.div`
    font-weight: 600;
    font-size: 31px;
    line-height: 37px;

    color: #2e3135;
`;

const PostInfo = styled.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #adadb7;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 35px;
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

const BoardSelector = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    border-right: 1px solid #e6e9f5;
`;

const Container = styled.div`
    width: 1100px;
    display: flex;
`;

const Main = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
`;

const BoardList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 28px 25px;
`;

const BoardItem = styled.div<{ active?: boolean }>`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => (props.active ? "#2684F9" : "#c8cfd7")};
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        color: #2684f9;
    }
`;

const CategoryName = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    padding: 30px 25px;
    border-bottom: 1px solid #e6e9f5;
`;

const BannerSubtitle = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
`;

const BannerTitle = styled.div`
    font-weight: 600;
    font-size: 35px;
    color: #ffffff;
`;

const Banner = styled.div`
    width: 100%;
    height: 404px;
    background-image: url("/images/boardbg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const BannerContainer = styled.div`
    width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 47px;
    gap: 9px;
`;

export default Board;
