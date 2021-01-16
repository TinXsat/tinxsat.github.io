import React from 'react';
import { Container, Link, Card, Images, Text, TextBig} from './styles/documentation';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Footer.Card = function FooterCard({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};
Footer.Images = function FooterImages({ children, illustration = "150px", ...restProps }) {
    return <Images illustration={illustration}{...restProps}>{children}</Images>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Footer.TextBig = function FooterTextBig({ children, ...restProps }) {
    return <TextBig {...restProps}>{children}</TextBig>;
};