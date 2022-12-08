import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const FourOhFour = () => {
    return (
        <Container>
            <Layout>
                <Title>404 Not Found</Title>
                <Content>존재하지 않는 페이지입니다.</Content>
                <BackButton href={"/"}>메인 화면으로 돌아가기</BackButton>
            </Layout>
        </Container>
    );
};

const Content = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: #c2c4cc;
    margin-top: 12px;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #2684f9;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 1100px;
`;

const BackButton = styled(Link)`
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: -0.41px;
    color: #ffffff;
    padding: 16px 35px;
    background: #2684f9;
    border-radius: 5px;
    margin-top: 54px;
    &:hover {
        cursor: pointer;
        background: #1f6ed1;
    }
`;

export default FourOhFour;
