


import { FC } from "react";
import { Header } from "./layout/header/Header";
import styled from "styled-components";
import { MainSection } from "./layout/mainSection/MainSection";
import { theme } from "./styles/theme";

export const App:FC = () => {
  return <div>
    <Header />
    <MainSection />
  </div>
};



const AppStyled =  styled.div`
font-family: 'Roboto',Arial, "Helvetica Neue", Helvetica, sans-serif;

`;




