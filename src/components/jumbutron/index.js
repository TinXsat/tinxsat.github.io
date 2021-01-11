import React from 'react';
import { Container, Image, Text, BigText, TextWrapper, InfoWrapper, Background } from './styles/jumbutron';

export default function Jumbutron({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbutron.Image = function JumbutronImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
Jumbutron.Text = function JumbutronText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Jumbutron.BigText = function JumbutronBigText({ children, ...restProps }) {
    return <BigText {...restProps}>{children}</BigText>;
};
Jumbutron.TextWrapper = function JumbutronTextWrapper({ children, direction = 'row', ...restProps }) {
    return <TextWrapper direction={direction}>{children}</TextWrapper>;
};
Jumbutron.InfoWrapper = function JumbutronInfoWrapper({ children, ...restProps }) {
    return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};
Jumbutron.Background = function JumbutronBackground({ children, direction = '5deg', gradient = "90deg", ...restProps }) {
    return <Background direction={direction} gradient={gradient} {...restProps}>{children}</Background>;
};