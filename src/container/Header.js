import React from 'react';
import { Header } from '../components';
import logo from "../assets/logo.png"

export function HeaderContainer({ children }) {
    return (
        <>
        <Header>
            <Header.TextWrapper>
                <Header.BigText>Witaj Na stronie TinX</Header.BigText>
                <Header.Text>Lorem isum Fajnie ogolem by bylo tutaj cos napsac jakies motto ale totalnie nie mam pomyslu</Header.Text>
            </Header.TextWrapper>
            <Header.Image src={logo}/>

        </Header>
        <Header.SectionContainer>
            <Header.Text>Zobacz informacje o nas!</Header.Text>
            <Header.Button/>
        </Header.SectionContainer>
        </>
    );
}