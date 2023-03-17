import Image from 'next/image';
import { HeroStyle } from './style';

const Hero = () => {
  return (
    <HeroStyle>
      <Image alt="hero" src="/img/hero-banner.png" width={1920} height={730} />
    </HeroStyle>
  );
};

export default Hero;
