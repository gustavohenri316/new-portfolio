import React from 'react';
import AboutImg from '../../assets/images/eu.jpeg';
import AboutInfoItem from '../../components/AboutInfoItem';
import ContactBanner from '../../components/ContactBanner';
import PText from '../../components/PText';
import { AboutPageStyles } from './styles';


export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Gustavo Oliveira</span>
              </p>
              <h2 className="about__heading">Front-End developer</h2>
              <div className="about__info">
                <PText>
                I'm from Contagem, Minas Gerais. A place of beauty and nature. Since my childhood, I love art and technology. I will always try to design things with my unique point of view. I love creating things that can be useful to others as well.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a className='button-cv' href="/cv.pdf" download="Curriculo Gustavo Henrique (ver. 2.0.1).pdf" target='_blank'>Download CV</a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Escola Estadua Santa Quiteria']}
              />
              <AboutInfoItem
                title=" University"
                items={['Ciência da Computação, Centro Universitário Una Betim']}
              />
              {/* <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              /> */}
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'SaaS','Tailwind Css','JavaScript', 'REACT', 'TypeScript',]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
               <AboutInfoItem
                title="Mobile"
                items={['React Native', 'Flutter']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-2022"
                items={['Junior front end developer at A.R Phoenix']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['Freelance web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
