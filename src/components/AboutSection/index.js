import React from 'react';
import AboutImg from '../../assets/images/Hero.jpeg';
import Button from '../Button';
import PText from '../PText';
import SectionTitle from '../SectionTitle';
import { AboutSectionStyles } from './styles';



export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
          I'm a website designer and developer, I live in Belo Horizonte - Minas Gerais. I create professional websites, love art and always try to show unique views to the public through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
