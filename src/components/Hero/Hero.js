import React from 'react';

import {Section, SectionText, PageTitle} from '../../styles/GlobalComponents';
import {LeftSection} from './HeroStyles';
import {} from "react-icons"

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <PageTitle main center>
          Hello World! <br />
          Welcome to Parmeshwar's Digital Playground!</PageTitle>
        <SectionText style={{paddingBottom:0}}>
        passionate backend developer #LFG🚀
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;