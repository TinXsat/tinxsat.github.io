import React from 'react';
import { Sponsors } from '../components';
import bluedot from "../assets/bluedot.png";
import kosmonauta from "../assets/kosmonauta.png";
import logo01 from "../assets/logo-01.png";
import Nettigo from "../assets/Nettigo-logotyp.png";
import UR from "../assets/external-content.duckduckgo.com.jpg";
import logo02 from "../assets/logoTypuXD.jpg";

export function SponsorsContainer({ children }) {
    return (
        <Sponsors>
            <Sponsors.BigText>Sponsorzy</Sponsors.BigText>
            <Sponsors.GalleryWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={logo01} />
                </Sponsors.SponsorWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={bluedot} />
                </Sponsors.SponsorWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={kosmonauta} />
                </Sponsors.SponsorWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={logo02} />
                </Sponsors.SponsorWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={UR} margin={"-10px"} size={"550px"}/>
                </Sponsors.SponsorWrapper>
                <Sponsors.SponsorWrapper>
                    <Sponsors.Image src={Nettigo}/>
                </Sponsors.SponsorWrapper>
            </Sponsors.GalleryWrapper>
        </Sponsors>
    );
}