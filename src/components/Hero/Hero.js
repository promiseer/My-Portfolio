import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {LeftSection} from './HeroStyles';
import {} from "react-icons"

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello World! <br />
          This is Parmeshwar
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        passionate backend developer #LFG🚀
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;