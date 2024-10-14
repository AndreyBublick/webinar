


import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const Logo = () => {
    return (
        <LogoStyled href='#'>
            <Icon id={'logo'} width={200} height={48} viewBox={"0 0 200 48"} />
        </LogoStyled>
    )
}



const LogoStyled = styled.a`


@media (max-width:375px) {
    transform:scale(0.7);
    transform-origin:left;
}
`;

