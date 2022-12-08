import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLayout>
                <Row>
                    <SunrinLogo src="/images/sunrin.svg" />
                    <Spacer horizontal size="30px" />
                    <Column>
                        <SchoolName>선린인터넷고등학교</SchoolName>
                        <Spacer size="3px" />
                        <SchoolNameSub>
                            SUNRIN INTERNET HIGH SCHOOL
                        </SchoolNameSub>
                    </Column>
                </Row>
                <Spacer size="36px" />
                <Shortcut>
                    <LinkText href="/about">개인정보처리방침</LinkText>
                    <LinkText href="/about">서비스이용약관</LinkText>
                    <LinkText href="/about">저작권저장정책</LinkText>
                    <LinkText href="/about">개인정보수집및이용</LinkText>
                </Shortcut>
                <Spacer size="25px" />
                <Detail>[04314] 서울특별시 용산구 원효로97길 33-4</Detail>
                <Detail>
                    대표전화: 02-713-6211 FAX: 02-704-0960 선린인터넷고등학교
                </Detail>
                <Detail>
                    홈페이지 개발 및 디자인 : 주현명(소프트웨어과,117기)
                </Detail>
                <Detail>
                    Copyright © 1899 - 2021 SUNRIN INTERNET HIGH SCHOOL. All
                    Rights Reserved.
                </Detail>
            </FooterLayout>
        </FooterContainer>
    );
};

const LinkText = styled(Link)`
    font-weight: 500;
    font-size: 19px;
    color: #4a4f54;
    margin-right: 50px;
    cursor: pointer;
    &:hover {
        color: #2684f9;
        text-decoration: underline;
    }
`;

const Detail = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #9c9ea5;
    margin-top: 12px;
`;

const Shortcut = styled.div`
    display: flex;
    align-items: center;
`;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #e2e2f5;
`;

const FooterLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1100px;
    margin: 50px 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const SunrinLogo = styled.img`
    width: 30px;
    height: auto;
`;

const SchoolName = styled.div`
    font-weight: 700;
    font-size: 30px;
    color: #2a2c2e;
`;

const SchoolNameSub = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #2a2c2e;
`;

const Spacer = styled.div<{ horizontal?: boolean | null; size: string }>`
    width: ${(props: any) => (props.horizontal ? props.size : "0px")};
    height: ${(props: any) => (props.horizontal ? "0px" : props.size)};
`;

export default Footer;
