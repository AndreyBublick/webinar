


import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon';
import { Button } from '../../components/Button';
import { theme } from '../../styles/theme';

export const Header = () => {
    return <HeaderStyled >
        <div>
            <div>
                <Icon id={'logo'} width={200} height={48} viewBox={"0 0 200 48"} />
                <Button textBody={"login"} />

            </div>

        </div>
    </HeaderStyled>
}

const HeaderStyled = styled.header`

font-family: 'Roboto';
padding: 20px;
background-color:${theme.colors.accent};
&>div {
    max-width:${theme.container};
    margin: 0 auto;

}
&>div > div{
    display:flex;
    align-items:center;
    justify-content:space-between;  
}
`;
