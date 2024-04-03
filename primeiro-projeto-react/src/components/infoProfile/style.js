import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: ${(props) => props.theme.textPrimary};
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &:hover {
        opacity: 0.7;
    }
`;

export const ProfileImg = styled.img`
    width: 32px;
    heigth: 32px;
    border-radius: 50%;
`;
