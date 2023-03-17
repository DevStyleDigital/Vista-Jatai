import WhatsSvg from 'assets/svg/whats';
import { WhatsappStyle } from './style';

const Whatsapp = () => {
  return (
    <WhatsappStyle
      href="https://api.whatsapp.com/send?phone=5515998508929"
      target="e_blank"
      id="button-whatsapp"
    >
      <WhatsSvg />
      <span>Whatsapp</span>
    </WhatsappStyle>
  );
};

export default Whatsapp;
