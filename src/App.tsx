


import { FC } from "react";
import { Header } from "./layout/header/Header";
import styled from "styled-components";
import { MainSection } from "./layout/mainSection/MainSection";
import { theme } from "./styles/theme";
import { Footer } from "./layout/footer/Footer";

export const App:FC = () => {
  return <div>
    <Header />
    <MainSection />
    <Footer />
  </div>
};







