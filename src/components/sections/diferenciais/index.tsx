import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useState } from 'react';
import { DiferenciaisList } from '@utils/diferenciais';
import { DiferenciasStyle } from './style';

const DiferenciaisSection = () => {
  const [type, setType] = useState(1);
  const difencialFiltred = DiferenciaisList.filter((e) => e.type === type);
  const partes = [];
  const len = 6;
  for (let i = 0; i < difencialFiltred[0].content.length; i += len) {
    partes.push(difencialFiltred[0].content.slice(i, i + len));
  }
  const ChangeButton = (button: number) => {
    if (button === type) return;
    const buttons = document.querySelectorAll('.buttonDife');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].className.includes('active')) {
        buttons[i].classList.remove('active');
      }
    }
    const buttonSelect = document.getElementById(`buttonDife${button}`);
    buttonSelect?.classList.add('active');
    setType(button);
  };
  return (
    <DiferenciasStyle id="diferenciais">
      <h1>
        Diferenciais que fazem toda diferença para você viver com <br />
        <strong>exclusividade, praticidade e tranquilidade.</strong>
      </h1>
      <div className="container">
        <div className="content">
          <div className="buttons">
            <button
              type="button"
              id="buttonDife1"
              className="active buttonDife"
              onClick={() => ChangeButton(1)}
            >
              <span>Empreendimento</span>
            </button>
            <button
              type="button"
              className="buttonDife"
              id="buttonDife2"
              onClick={() => ChangeButton(2)}
            >
              <span>Sustentabilidade</span>
            </button>
            <button
              type="button"
              className="buttonDife"
              id="buttonDife3"
              onClick={() => ChangeButton(3)}
            >
              <span>Apartamentos</span>
            </button>
          </div>
          <div className="line" />
        </div>
        <div className="items">
          <Swiper navigation modules={[Navigation]} className="mySwiper">
            {partes.length > 1 ? (
              <>
                <SwiperSlide>
                  <div className="bloco">
                    {partes[0].map((item: any) => (
                      <span key={item.id}>
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bloco">
                    {partes[1].map((item: any) => (
                      <span key={item.id}>
                        {item.icon}
                        {item.label}
                      </span>
                    ))}
                  </div>
                </SwiperSlide>
              </>
            ) : (
              <SwiperSlide>
                {partes[0].map((item: any) => (
                  <div key={item.id} className="bloco">
                    {item.label}
                  </div>
                ))}
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="line" />
      </div>
    </DiferenciasStyle>
  );
};

export default DiferenciaisSection;
