


import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme';

export const MenuBurger = () => {
  return (
    <MenuBurgerStyled>
      <span></span>
    </MenuBurgerStyled>
  )
}




const MenuBurgerStyled = styled.div`
width:30px;
height:25px;

cursor: pointer;

position: relative;

&::before,&::after{
    content:'';
}
&::before,&::after, span{
    position:absolute;
    background-color:${theme.colors.main};
width:100%;
height:2px;
border-radius:1em;
left:0;

}

&::before{
    top:0;
}
span{
top:50%;
left:0%;
transform:translate(0%,-50%);
}
&::after{
    bottom:0;
}

@media (min-width:769px) {
    display:none;
}
`;