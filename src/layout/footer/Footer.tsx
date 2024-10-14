
import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/theme';

export const Footer = () => {
    const [links, setLinks] = useState([
        {
            link: 'home',
            icon: 'home',
        }, {
            link: 'All Courses ',
            icon: 'computer',
        }, {
            icon: 'sandbox',
            link: 'Sandbox ',
        }, {
            icon: 'map',
            link: 'Contacts',
        },]);

    return (
        <FooterStyled>
            <ListStyled>
                {links.map((item) => <li> <Icon id={item.icon} /> <a href="#">{item.link}</a></li>)}
            </ListStyled>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`

background-color:${theme.colors.accent};

`;
const ListStyled = styled.nav`
display:flex;
padding:30px;
justify-content:space-between;
align-items:center;
margin:0 auto;
max-width:${theme.container};
flex-wrap:wrap;
gap:29px;

&>li{
    display:flex;
    gap:10px;
    align-items:center;
    color:${theme.colors.main};
    svg{
        /* color:inherit; */
        /* stroke:currentColor; */
        fill:currentColor;
    }
    a{
        color:inherit;
font-size: 16px;
line-height: calc(22/16);
letter-spacing: -0.02em;


}

@media (max-width:576px) {
 &{
    flex:1 1 calc(50% - 20px);
 }
   
}
@media (max-width:359px) {
 &{
    flex:1 1 100%;
 }
   
}
}
`;

