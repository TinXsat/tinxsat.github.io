import React from 'react';
import { Jumbutron } from '../components';
import Team from "../assets/online_team_meeting_.svg"
import AboutUs from "../assets/brainstorming_session__monochromatic.svg"
import Rocket from "../assets/fast_working.svg"
import startup from "../assets/startup.svg"

export function JumbutronContainer({ children }) {
    return (
        <>
        <Jumbutron>
                <Jumbutron.Background />
                <Jumbutron.InfoWrapper>
                <Jumbutron.TextWrapper margin={"-80px"}>
                    <Jumbutron.BigText>Kim jesteśmy?</Jumbutron.BigText>
                    <Jumbutron.Text>TinX to grupa uczniów. Połączona wspólnym celem stworzenia misji na konkurs CanSat.</Jumbutron.Text>
                    <Jumbutron.BigText>Współpracuj z nami!</Jumbutron.BigText>
                    <Jumbutron.Text>Chcesz nam pomóc lub chcesz zorganiować warsztaty? To dobrze trafiłeś!.</Jumbutron.Text>
                </Jumbutron.TextWrapper>
                <Jumbutron.Image src={Team}/>
                </Jumbutron.InfoWrapper>
        </Jumbutron>
            <Jumbutron>
                <Jumbutron.Background direction={"-5deg"}/>
                <Jumbutron.InfoWrapper direction={"row-reverse"}>
                    <Jumbutron.TextWrapper>
                        <Jumbutron.BigText>O Nas</Jumbutron.BigText>
                        <Jumbutron.Text>TinX to zespół składający się z pięciu uczniów oraz opiekuna z Zespołu Szkół Elektronicznych w Rzeszowie. Drużyna została postawiona przed zadaniem wykonania CanSata, czyli małego satelity, który zostanie wystrzelony w ramach konkursu organizowanego przez Europejskie Biuro Edukacji Kosmicznej (ESERO).</Jumbutron.Text>
                    </Jumbutron.TextWrapper>
                    <Jumbutron.Image src={startup}/>
                </Jumbutron.InfoWrapper>
            </Jumbutron>
            <Jumbutron>
                <Jumbutron.Background />
                <Jumbutron.InfoWrapper>
                    <Jumbutron.TextWrapper margin={"-70px"}>
                        <Jumbutron.BigText>Nasz projekt</Jumbutron.BigText>
                        <Jumbutron.Text>Ludzkość staje przed coraz to nowymi problemami. Jednym z takich problemów są klęski żywiołowe,które z powodu zmian klimatycznych będą powtarzać się coraz częściej. Dlatego zespół TinX chce opracować tani i niezawodny system, który pomoże ratować ludzkie zdrowie i życie w trakcie takich zdarzeń.</Jumbutron.Text>
                    </Jumbutron.TextWrapper>
                    <Jumbutron.Image src={Rocket}/>
                </Jumbutron.InfoWrapper>
            </Jumbutron>
            <Jumbutron>
                <Jumbutron.Background direction={"-5deg"}/>
                <Jumbutron.InfoWrapper direction={"row-reverse"}>
                    <Jumbutron.TextWrapper>
                        <Jumbutron.BigText>Chciałbyś nam pomóc?</Jumbutron.BigText>
                        <Jumbutron.Text>Przyda nam się każda pomoc. Chcesz napisać o naszym projekcie? Wspomóc nas finansowo? Dać dobrą radę? Skontaktuj się z nami!</Jumbutron.Text>
                        <Jumbutron.Text>E-mail: tinxcasat@gmail.com</Jumbutron.Text>
                        <Jumbutron.Text> Telefon: 533 900 794</Jumbutron.Text>
                    </Jumbutron.TextWrapper>
                    <Jumbutron.Image src={AboutUs}/>
                </Jumbutron.InfoWrapper>
            </Jumbutron>
        </>
    );
}