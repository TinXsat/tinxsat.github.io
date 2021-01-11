import React from 'react';
import { Footer } from '../components';

export function FooterContainer({ children }) {
    return (
        <Footer>
            <Footer.Link href={"https://github.com/tinxsat/"}>Github</Footer.Link>
            <Footer.Link href={"https://github.com/TinXsat/project-structure/blob/master/TinXPDR.pdf"}>PDR</Footer.Link>
            <Footer.Link href={"https://www.facebook.com/tinxsat"}>Facebook</Footer.Link>
            <Footer.Text>TinX 2021 made by Szymon Mytych</Footer.Text>
        </Footer>
    );
}