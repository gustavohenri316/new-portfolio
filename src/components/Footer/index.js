import React from 'react';
import FooterCol from '../FooterCol';
import PText from '../PText';
import { FooterStyle } from './styles';

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Gustavo Oliveira</h1>
          <PText>
          A web designer and web developer from Contagem, Minas Gerais. I always make websites with unique designs and also with a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+55 3199335-8612',
                path: 'tel:+5531993358612',
              },
              {
                title: 'gustavohenri316@icloud.com',
                path: 'mailto:gustavohenri316@icloud.com',
              },
              {
                title: 'Contagem, Minas Gerais, Brasil',
                path: "https://www.google.com.br/maps/@-19.8883584,-44.0936536,19.5z",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/gustavohenri316/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/gustavohenri316',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/gustavogoncalveshenrique/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/gustavoh.jpg/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Gustavo Oliveira | Designed By{' '} @GuhCode
            {/* <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '} */}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
