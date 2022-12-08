import React from "react";
import styled from "styled-components";

interface AnnounceProps {
    title: string;
    date: string;
    content: string;
}

const Announce = ({ title, date, content }: AnnounceProps) => {
    const [isHover, setIsHover] = React.useState(false);

    const DateIcon = styled.span`
        color: ${isHover ? "white" : "#a4b8d2"};
        font-size: 22px;
    `;

    const AnnounceLink = styled.a`
        width: 92px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #5f7186;
        background-color: ${isHover ? "white" : "#5f7186"};
        color: ${isHover ? "#2684F9" : "white"};
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
            background-color: #e4e4e8;
        }
    `;

    const Vertical = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const AnnounceTitle = styled.div`
        font-weight: 700;
        font-size: 18px;
        color: ${isHover ? "white" : "#4c6280"};
        transition: all 0.5s ease-in-out;
    `;

    const AnnounceContent = styled.div`
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: ${isHover ? "white" : "#a4b8d2"};
        transition: all 0.5s ease-in-out;
    `;

    const AnnounceDate = styled.div`
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: ${isHover ? "white" : "#a4b8d2"};
        transition: all 0.5s ease-in-out;
        gap: 8px;
    `;

    const SpaceBetween = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Container = styled.div`
        width: 350px;
        height: 240px;
        padding: 26px;
        background: ${isHover ? "#2684F9" : "#f0f7ff"};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.025);
        }
    `;

    const Spacer = (props: any) => {
        return <div style={{ height: `${props.size}` }} />;
    };

    return (
        <Container
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Vertical>
                <AnnounceTitle>{title}</AnnounceTitle>
                <Spacer size="22px" />
                <AnnounceContent>{content}</AnnounceContent>
            </Vertical>
            <SpaceBetween>
                <AnnounceDate>
                    <DateIcon className="material-symbols-rounded">
                        schedule
                    </DateIcon>
                    {date}
                </AnnounceDate>
                <AnnounceLink href={"/article"}>자세히보기</AnnounceLink>
            </SpaceBetween>
        </Container>
    );
};

export default Announce;
