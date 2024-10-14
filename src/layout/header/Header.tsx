


import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon';
import { Button } from '../../components/Button';
import { theme } from '../../styles/theme';
import { MenuBurger } from '../../components/menuBurger/MenuBurger';
import { Logo } from '../../components/logo/Logo';

export const Header = () => {
    return <HeaderStyled >
        <div>

            <Logo />
            <Button textBody={"login"} />
            <MenuBurger />


        </div>
    </HeaderStyled>
}

const HeaderStyled = styled.header`



padding: 20px 15px;
background-color:${theme.colors.accent};
&>div {
    max-width:${theme.container};
    display:flex;
    align-items:center;
    justify-content:space-between;  
    margin: 0 auto;
    @media (min-width:769px) {
        gap:50px;

    }
}
button{
    @media (max-width:768px) {
        display:none;
        
    }
}
`;
