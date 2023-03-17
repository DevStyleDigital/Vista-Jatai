import Image from 'next/image';
import { SectionImgStyle } from './style';

const SectionImg = () => {
  return (
    <SectionImgStyle>
      <div className="content">
        <Image
          alt="img-mapa"
          src="/img/Localização-Drone.png"
          width={1920}
          height={730}
        />
      </div>
    </SectionImgStyle>
  );
};

export default SectionImg;
