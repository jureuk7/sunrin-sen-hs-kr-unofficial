import Link from "next/link";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Checkbox from "../components/checkbox";
import { signIn } from "../api/api";
import { useRouter } from "next/router";

const SignIn = () => {
    const router = useRouter();
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleLogin = async () => {
        const response = await signIn({ username: id, password });
        if (response) {
            console.log(response);
        }
    };

    return (
        <>
            <BackButton onClick={() => router.replace("/")}>
                <BackIcon className="material-symbols-rounded">
                    arrow_back
                </BackIcon>
                메인페이지
            </BackButton>
            <AppContainer>
                <AuthForm>
                    <SunrinLogo src="images/sunrin.svg" />
                    <Spacer size="18px" />
                    <TypoTitle>선린인터넷고등학교</TypoTitle>
                    <Spacer size="12px" />
                    <TypoAuth>로그인</TypoAuth>
                    <Spacer size="28px" />
                    <AuthInput
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <Spacer size="18px" />
                    <AuthInput
                        type={passwordVisible ? "text" : "password"}
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Spacer size="26px" />
                    <Checkbox
                        checked={passwordVisible}
                        onChange={() => setPasswordVisible(!passwordVisible)}
                        label="비밀번호 표시"
                    />
                    <Spacer size="32px" />
                    <AuthButton onClick={handleLogin}>로그인</AuthButton>
                    <Spacer size="38px" />
                    <AuthAction>
                        아직 회원이 아니신가요?
                        <Spacer size="23px" horizontal />
                        <LoginLink href="signup">회원가입</LoginLink>
                    </AuthAction>
                </AuthForm>
            </AppContainer>
        </>
    );
};

const BackIcon = styled.span`
    font-size: 32px;
    color: #4b4d52;
`;

const BackButton = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: #4b4d52;
    gap: 20px;
    font-size: 27px;
    border-radius: 10px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f4;
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const LoginLink = styled(Link)`
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;

    color: #2684f9;
    &:hover {
        text-decoration: underline;
    }
`;

const AuthAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #6d7784;
`;

const AuthButton = styled.button`
    width: 455px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    background: #2684f9;
    border-radius: 9px;
    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #1f6ed8;
    }
`;

const AuthInput = styled.input`
    width: 455px;
    height: 67px;
    background: #f7f9fc;
    border-radius: 9px;
    padding: 20px 22px;
    font-weight: 500;
    font-size: 22px;
    color: #37393b;
    &::placeholder {
        font-weight: 500;
        font-size: 22px;
        color: #c2c5c9;
    }
    transition: all 0.2s ease-in-out;
    outline: 2px solid transparent;
    &:focus {
        outline: 3px solid #2684f9;
    }
    &:-webkit-autofill {
        appearance: none;
    }
    border: none;
`;

const TypoAuth = styled.div`
    font-weight: 600;
    font-size: 34px;
    color: #0080ff;
`;

const TypoTitle = styled.div`
    font-weight: 500;
    font-size: 34px;
    color: #2c3033;
`;

const Spacer = styled.div<{ horizontal?: boolean | null; size: string }>`
    width: ${(props: any) => (props.horizontal ? props.size : "0px")};
    height: ${(props: any) => (props.horizontal ? "0px" : props.size)};
`;

const SunrinLogo = styled.img`
    width: 60px;
`;

const AuthForm = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${slideIn} 1s;
`;

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default SignIn;
