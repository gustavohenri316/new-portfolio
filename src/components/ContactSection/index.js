import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from '../ContactForm';
import ContactInfoItem from '../ContactInfoItem';
import SectionTitle from '../SectionTitle';
import { ContactSectionStyle } from './styles';

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+55 31 9 9335-8612" />
            <ContactInfoItem icon={<MdEmail />} text="gustavohenri316@icloud.com" />
            <ContactInfoItem text="Contagem, Minas Gerais" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
