import React from 'react';
import { Container, Image, Text, BigText, TextWrapper, SectionContainer, Button } from './style/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Image = function HeaderImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Header.BigText = function HeaderBigText({ children, ...restProps }) {
    return <BigText {...restProps}>{children}</BigText>;
};
Header.TextWrapper = function HeaderTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
Header.SectionContainer = function HeaderSectionContainer({ children, ...restProps }) {
    return <SectionContainer {...restProps}>{children}</SectionContainer>;
};
Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};