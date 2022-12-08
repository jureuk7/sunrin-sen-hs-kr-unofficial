import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import category from "constants/basic";

const Header = () => {
    const [query, setQuery] = React.useState("");
    const [nav, setNav] = React.useState(false);
    const router = useRouter();
    const [categoryModal, setCategoryModal] = React.useState(false);
    const [currentCategory, setCurrentCategory] = React.useState<number | null>(
        null
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setNav(window.scrollY > 100 ? true : false)
            );
        }
    }, []);

    const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
    const openCategoryModal = (category: number) => {
        setCategoryModal(true);
        setCurrentCategory(category);
    };

    const closeCategoryModal = () => {
        setCategoryModal(false);
        setCurrentCategory(null);
    };

    const CategoryModal = styled.div`
        position: absolute;
        top: 100%;
        width: 170px;
        background: #ffffff;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-top: 3px solid #2684f9;
        animation: ${slideIn} 0.5s;
    `;
    const Category = styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
    `;
    const CategoryTitle = styled.div`
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    `;
    const LinkToPage = styled(Link)`
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: ${nav ? "#A8A8AE" : "rgba(255, 255, 255, 0.78)"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover {
            color: #2684f9;
        }
    `;
    const CategoryLinks = styled(Link)`
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #a8a8ae;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: #2684f9;
        }
        cursor: pointer;
    `;
    const Logo = styled.div`
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        gap: 14px;
        color: ${nav ? "#000000" : "rgba(255, 255, 255, 0.78)"};
        transition: all 0.2s ease-in-out;
        padding: 10px 16px;
        margin-left: -16px;
        cursor: pointer;
        &:hover {
            background: rgba(161, 161, 161, 0.088);
            border-radius: 10px;
        }
    `;
    const Path = styled.path`
        transition: all 0.2s ease-in-out;
    `;

    const SearchBar = styled.div`
        width: 237px;
        height: 41px;
        background: ${nav
            ? "rgba(206, 206, 206, 0.26)"
            : "rgba(175, 175, 175, 0.22)"};
        border-radius: 12px;
        padding: 10px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const SearchInput = styled.input`
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: rgb(27, 26, 28);
        background: none;
        outline: none;
        border: none;
        transition: all 0.2s ease-in-out;
        &::placeholder {
            color: ${nav ? "rgba(13, 13, 13, 0.19)" : "#9ea2a8"};
        }
    `;

    const SearchIcon = styled.span`
        font-size: 20px;
        color: ${nav ? "#A3A3A3" : "#A3A3A3"};
        transition: all 0.2s ease-in-out;
    `;

    return (
        <Container navBar={nav}>
            <HeaderContainer>
                <Logo onClick={() => router.replace("/")}>
                    <svg
                        width="19"
                        height="24"
                        viewBox="0 0 19 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M9.86261 11.7173C9.86261 11.7173 3.40529 12.5611 3.47266 8.80557C3.55192 4.37513 8.1376 0.945139 11.7416 0C11.7416 0 7.69545 0.778007 4.95367 2.68808C2.21188 4.59816 0 7.25946 0 9.51137C0 11.7633 2.23453 12.8546 3.2513 13.0363C4.26808 13.218 6.39108 13.3321 9.86261 11.7173Z"
                            fill={nav ? "#36A53A" : "#FFFFFF"}
                            fill-opacity="0.78"
                        />
                        <Path
                            d="M0.605225 24C0.605225 24 6.19975 21.9286 10.6433 17.7905C15.0869 13.6524 15.8823 7.27109 6.73701 9.10138C6.73701 9.10138 10.478 7.50519 13.1796 7.50519C15.8812 7.50519 18.9978 8.02929 18.9978 11.2508C19 15.6294 10.9264 23.5405 0.605225 24Z"
                            fill={nav ? "#2F51A8" : "#FFFFFF"}
                            fill-opacity="0.78"
                        />
                        <Path
                            d="M17.001 1.75344C17.5972 2.81563 17.1267 4.24294 15.9503 4.94117C14.7739 5.6394 13.3376 5.34531 12.7414 4.28312C12.1453 3.22094 12.6373 1.83147 13.7916 1.09539C14.7959 0.454818 16.4049 0.691248 17.001 1.75344Z"
                            fill={nav ? "#DE7655" : "#FFFFFF"}
                            fill-opacity="0.78"
                        />
                    </svg>
                    선린인터넷고등학교
                </Logo>
                <Links>
                    {category.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onMouseOver={() => openCategoryModal(item.id)}
                                onMouseLeave={() => closeCategoryModal()}
                                style={{ height: "100%" }}
                            >
                                <LinkToPage
                                    href={`/board/${item.id.toString()}`}
                                >
                                    {item.name}
                                </LinkToPage>
                                {categoryModal &&
                                    currentCategory === item.id && (
                                        <CategoryModal
                                            onMouseOver={() =>
                                                openCategoryModal(item.id)
                                            }
                                            onMouseLeave={() =>
                                                closeCategoryModal()
                                            }
                                        >
                                            <CategoryTitle>
                                                {item.name}
                                            </CategoryTitle>
                                            <Category>
                                                {item.submenus.map(
                                                    (sub, subIndex) => (
                                                        <CategoryLinks
                                                            href={subIndex.toString()}
                                                            key={subIndex}
                                                        >
                                                            {sub.name.toString()}
                                                        </CategoryLinks>
                                                    )
                                                )}
                                            </Category>
                                        </CategoryModal>
                                    )}
                            </li>
                        );
                    })}
                </Links>
                <SearchBar>
                    <SearchInput
                        placeholder="검색어를 입력해주세요"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <SearchIcon className="material-symbols-rounded">
                        search
                    </SearchIcon>
                </SearchBar>
            </HeaderContainer>
        </Container>
    );
};

export default Header;

const Links = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 38px;
    height: 100%;
    & > li {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }
`;

const Container = styled.header<{ navBar: boolean }>`
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 62px;
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.navBar ? "#ffffff" : "transparent")};
    transition: all 0.5s ease-in-out;
`;

const HeaderContainer = styled.div`
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
