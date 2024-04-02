import styled, { css } from "styled-components";

export const Conteiner = styled.div`
    width: 338px;
    heigth: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ${(props) => css`
        background-color: ${props.theme.primary};
        border: ${`1px solid ${props.theme.primary}`};
        box-shadow: ${`9px 0px 33px 39px ${props.theme.boxShadow}`};
    `};
`;

export const BtnTheme = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: ${(props) => props.theme.textPrimary};
    position: absolute;
    rigth: 0;
    top: 0;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`;

export const Profile = styled.div`
    position: relative;
    width: 88px;
    heigth: 88px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: linear-gradient(
        45deg,
        #f09433 8%, 
        #e6683c 25%, 
        #dc2743 50%, 
        #cc2366 75%, 
        #bc1888 100%
    );

    img {
        width: 82px;
        heigth: 82px;
        border-radius: 50%;
    }                
`;

export const ListIcon = styled.li`
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme.textPrimary};
    font-size: 24px;
    
    &:hover {
        opacity:0.7;
    }
`;
