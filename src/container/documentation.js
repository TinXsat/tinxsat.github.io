import React from 'react';
import { Documentation } from '../components';
import Facebook from '../assets/facebook.png';
import GitHub from '../assets/GitHub-Mark-120px-plus.png';
import Illustration1 from '../assets/undraw_At_work_re_qotl.png';
import Illustration2 from '../assets/undraw_Progress_overview_re_tvcl.png';
import Illustration3 from '../assets/undraw_Faq_re_31cw.png';

export function DocumentationContainer({ children }) {
    return (
        <Documentation>
            <Documentation.TextBig>Dokumentacja</Documentation.TextBig>
            <Documentation.Card>
            <Documentation.Link href={'https://github.com/TinXsat'} target="_blank">
                    <Documentation.Images illustration={'150px'} src={GitHub}/>
                    <Documentation.Text>Github</Documentation.Text>
            </Documentation.Link>
            <Documentation.Link href={'https://github.com/TinXsat/project-structure/blob/master/TinXCDR.pdf'} target="_blank">
                    <Documentation.Images illustration={'240px'} src={Illustration1}/>
                    <Documentation.Text>CDR</Documentation.Text>
            </Documentation.Link>
            <Documentation.Link href={'https://github.com/TinXsat/project-structure/blob/master/TinXPDR.pdf'} target="_blank">
                    <Documentation.Images illustration={'240px'} src={Illustration2} />
                    <Documentation.Text>PDR</Documentation.Text>
            </Documentation.Link>
            <Documentation.Link href={'https://www.facebook.com/tinxsat'} target="_blank">
                    <Documentation.Images illustration={'150px'} src={Facebook}/>
                    <Documentation.Text>Facebook</Documentation.Text>
            </Documentation.Link>
            <Documentation.Link href={''} target="_blank">
                 <Documentation.Images illustration={'240px'} src={Illustration3}/>
                 <Documentation.Text>FDR - Wkrotce</Documentation.Text>
            </Documentation.Link>
            </Documentation.Card>
        </Documentation>
    );
}