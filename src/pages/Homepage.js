import React from 'react';
import { HeaderContainer } from "../container/Header";
import { JumbutronContainer } from "../container/Jumbutron";
import {SponsorsContainer} from "../container/Sponsors";
import {FooterContainer} from "../container/Footer";

export default function Homepage() {
    return (
        <>
        <HeaderContainer />
        <JumbutronContainer/>
        <SponsorsContainer />
        <FooterContainer />
        </>
    );
}
