import React from 'react';
import { Container, Image, ArrowButtons, BigText, Text, GalleryWrapper, SponsorWrapper } from './styles/sponsors';

export default function Sponsors({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Sponsors.Image = function SponsorsImage({ children, size = '500px', ...restProps }) {
    return <Image size={size }{...restProps}>{children}</Image>;
};
Sponsors.Text = function SponsorsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Sponsors.BigText = function SponsorsBigText({ children, ...restProps }) {
    return <BigText {...restProps}>{children}</BigText>;
};
Sponsors.GalleryWrapper = function SponsorsGalleryWrapper({ children, ...restProps }) {
    return <GalleryWrapper {...restProps}>{children}</GalleryWrapper>;
};
Sponsors.ArrowButtons = function SponsorsArrowButtons({ children, ...restProps }) {
    return <ArrowButtons {...restProps}>{children}</ArrowButtons>;
};
Sponsors.SponsorWrapper = function SponsorsSponsorWrapper({ children, ...restProps }) {
    return <SponsorWrapper {...restProps}>{children}</SponsorWrapper>;
};