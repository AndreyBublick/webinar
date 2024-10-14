import { FC } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

type propsType = {
    textBody: string;
};

export const Button: FC<propsType> = ({ textBody }) => {


    return <ButtonStyled>
        {textBody}
    </ButtonStyled>
};


const ButtonStyled = styled.button`

    border:${theme.border.width} solid ${theme.colors.main};
    background:transparent;
    color:${theme.colors.main};
    text-transform: uppercase;
    border-radius:5px;
    font-size: ${theme.fontSize.baseSize};
    padding:0 2.1955em;
    line-height:2.25;
    @media (max-width:400px) {
    font-size: 12px;
        
    }
`;








