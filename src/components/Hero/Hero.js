import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi There My Name is Victor and I am a Front-End Web Developer, And I would be Interested in helping you achieve your Project Goals.
        I Proficient in Front-End Languages and frameworks such as Javascript, ReactJS, Tailwind, BootStrap, HTML, CSS and NextJS.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;