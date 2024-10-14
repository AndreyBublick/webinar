import { FC } from "react";
import styled from "styled-components";
import svgs from "../../assets/images/svg-storage.svg";


type porpsType = {
    id: string;
    viewBox?: string;
    width?: number;
    height?: number;
};


export const Icon: FC<porpsType> = ({ id,width,height,viewBox }) => {
    return <IconStyled  width={width&&width||22}  height={height&&height||22} viewBox={viewBox&&viewBox||"0 0 22 22"}>
        <use xlinkHref={`${svgs}#${id}`}></use>
    </IconStyled>
};



const IconStyled = styled.svg`
 /* stroke:currentColor; */
`;

