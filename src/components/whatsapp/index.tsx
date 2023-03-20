import WhatsSvg from 'assets/svg/whats';
import Link from 'next/link';
import { WhatsappStyle } from './style';

const Whatsapp = () => {
  return (
    <WhatsappStyle id="button-whatsapp">
      <Link
        href="https://api.whatsapp.com/send?phone=5515998508929"
        target="e_blank"
      >
        <WhatsSvg />
        <span>Whatsapp</span>
      </Link>
    </WhatsappStyle>
  );
};

export default Whatsapp;
