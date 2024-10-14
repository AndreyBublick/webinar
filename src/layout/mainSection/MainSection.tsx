

import React, { FC, useState } from 'react'
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

    const [cards, setCards] = useState([
        {
            title: 'теория html + css. Структура приложения', image: 'img_1', description: 'Проговорим о том, что такое HTML и CSS.  Создадим проект и рассмотрим его файловую структуру. Научимся работать с макетом в Figma. Изучим 13 самых используемых тегов. Напишем HTML-структуру нашего приложения.'
        },
        {
            description: 'Подключим шрифты. Рассмотрим самый правильный способ добавления стилей. Рассмотрим синтаксис написания стилей. Напишем стили для элементов. Изучим популярные свойства  . Посмотрим как располагать элементы, используя Flexbox.',
            title: 'Стилизация HTML-элементов',
            image: 'img_2',


        },
        {
            image: 'img_3',
            description: 'Сделаем наше приложение адаптивным, чтобы оно так же хорошо выглядело на планшетах и мобильных телефонах. Рассмотрим как работает св-во flex-wrap. Научимся делать адаптив, используя м едиазапросы.',
            title: 'Адаптив. Медиазапросы'
        },
    ]);

    return <MainSectionStyled>
        <h1>html+css. верстка</h1>
        <ItemsStyled>
            {cards.map((item, index) => <Item key={index} image={item.image} text={item.description} title={item.title} />)}
        </ItemsStyled>
    </MainSectionStyled>

}

const MainSectionStyled = styled.section`
max-width:${theme.container};
margin: 0 auto;
padding: 0 20px;
padding-top:100px;
margin-bottom:50px;
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

    
    &>div{
    flex:1 1 370px;
/* @media (max-width:375px) {
    flex:1 1 100%;
    
} */
}

/* @media (min-width:577px) {

} */
`;










const Item: FC<ItemProps> = ({ title, image, text }) => {
    return <ItemStyled>
        <h3>{title}</h3>
        <Icon id={image} width={282} height={200} viewBox={"0 0 282 200"} />
        <p>{text}</p>

    </ItemStyled>
};

const ItemStyled = styled.div`

  
border:1px solid gray;
border-radius:3px;
padding: 46px 20px;
display:flex;
flex-direction:column;
align-items:center;
h3 {
    font-size: ${theme.fontSize.h3Title};
font-weight: 700;
line-height: 1.3;
letter-spacing: -0.02em;
text-align:center;
text-transform: uppercase;
margin-bottom:40px;
@media (min-width:1200px) {
    padding:0 20px;
    
}
}

svg{
  margin: 0 auto;
  margin-bottom:36px;
  max-width:100%;
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