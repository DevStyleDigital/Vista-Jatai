import { MapaStyle } from './style';

const Mapa = () => {
  return (
    <MapaStyle>
      <div className="container">
        <div className="content">
          <div className="firstText">
            Região com infraestrutura completa para você viver despreocupado
          </div>
          <div className="secondText">
            O bairro Parque Jataí oferece lazer, praticidade e segurança para
            você e sua família.
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.101660189214!2d-47.46408188449371!3d-23.56479206760539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c589f6f826af59%3A0xf7070a7c9aa91489!2sAv.%20Ant%C3%B4nio%20Lopes%20dos%20Santos%2C%20875%20-%20Parque%20Jata%C3%AD%2C%20Votorantim%20-%20SP%2C%2018117-237!5e0!3m2!1spt-BR!2sbr!4v1678829482895!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        loading="lazy"
        title="mapa"
      />
    </MapaStyle>
  );
};

export default Mapa;
