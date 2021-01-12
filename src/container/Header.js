import React from 'react';
import { Header } from '../components';
import logo from "../assets/logo.png"
import arrow from "../assets/down-chevron.png"

export function HeaderContainer({ children }) {
    return (
        <>
        <Header>
            <Header.Background background={"20%"} backgroundSmall={"25%"} color={"#2CAFDB"}/>
            <Header.Background background={"32%"} backgroundSmall={"40%"} color={"#32C7FA"}/>
            <Header.Background background={"44%"} backgroundSmall={"55%"} color={"#4DD2FF"}/>
            <Header.TextWrapper>
                <Header.BigText>Witaj Na stronie TinX</Header.BigText>
                <Header.Text>Per aspera ad astra</Header.Text>
            </Header.TextWrapper>
            <Header.Image src={logo}/>

        </Header>
        <Header.SectionContainer>
            <Header.Text>Zobacz informacje o nas!</Header.Text>
            <Header.Button><img src={arrow} style={{height: '30px'}} alt={"Arrow"}/></Header.Button>
        </Header.SectionContainer>
        </>
    );
}