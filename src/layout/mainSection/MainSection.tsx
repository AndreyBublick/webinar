

import React, { FC } from 'react'
import styled from 'styled-components';
import svgs from '../../assets/images/svg-storage.svg';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/theme';


type ItemProps = {
    title: string,
    text: string,
    image: string,
};



export const MainSection = () => {
    return <MainSectionStyled>
        <h1>html+css. верстка</h1>
        <ItemsStyled>
            <Item title={'теория html + css. Структура приложения'} image={'img-1'} text={'Подключим шрифты. Рассмотрим самый правильный способ добавления стилей. Рассмотрим синтаксис написания стилей. Напишем стили для элементов. Изучим популярные свойства . Посмотрим как располагать элементы, используя Flexbox.'} />
            <Item title={'Стилизация HTML-элементов'} image={'img-1'} text={'Подключим шрифты. Рассмотрим самый правильный способ добавления стилей. Рассмотрим синтаксис написания стилей. Напишем стили для элементов. Изучим популярные свойства  . Посмотрим как располагать элементы, используя Flexbox.'} />
            <Item title={'Адаптив.Медиазапросы'} image={'img-1'} text={'Сделаем наше приложение адаптивным, чтобы оно так же хорошо выглядело на планшетах и мобильных телефонах. Рассмотрим как работает св-во flex-wrap. Научимся делать адаптив, используя м едиазапросы.'} />
        </ItemsStyled>
    </MainSectionStyled>

}

const MainSectionStyled = styled.section`
padding-top:100px;
h1{
   text-align:center;
   text-transform: uppercase;
font-size: ${theme.fontSize.h1Title};
font-weight: 700;
line-height: 1.35;
margin-bottom:70px;
}
`;

const ItemsStyled = styled.div`

gap:14px;
display:flex;
flex-wrap:wrap;
`;










const Item: FC<ItemProps> = ({ title, image, text }) => {
    return <ItemStyled>
        <h3>{title}</h3>
        <Icon id={image} width={282} height={200} viewBox={"0 0 282 200"} />
        <p>{text}</p>

    </ItemStyled>
};

const ItemStyled = styled.div`
flex:1 1 calc(33.33% - 14px);
  
border:1px solid gray;
border-radius:3px;
padding: 46px 20px;
display:flex;
flex-direction:column;

h3{
    font-size: ${theme.fontSize.h3Title};
font-weight: 700;
line-height: 1.3;
letter-spacing: -0.02em;
text-align:center;

margin-bottom:40px;

}

svg{
  margin: 0 auto;
  margin-bottom:36px;
}
p{
   /* flex:1 1 100%; */
   flex-grow:1;
    font-size: ${theme.fontSize.baseSize};
font-weight: 400;
line-height: 1.375;
letter-spacing: -0.02em;
text-align: left;

}

`;