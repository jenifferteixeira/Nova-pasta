import styled from "styled-components";

export const Container = styled.div`
    width: 1040px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    overflow-x: scroll;
    padding: 8px;

    &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }
      
    &::-webkit-scrollbar-track {
        background: transparent;
      }
      
    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.textPrimary};
        border-radius: 20px;
      }
`;

export const Profile = styled.div`
    position: relative;
    width: 74px;
    height: 74px;
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
        width: 68px;
        height: 68px;
        border-radius: 50%;
    }                
`;

export const Button = styled.button`
    border: none;
    background-color:transparent;
`;
