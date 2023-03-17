import { ValueSectionStyle } from './style';

const ValuesSection = () => {
  return (
    <ValueSectionStyle>
      <div className="texts">
        <div className="loteamento">
          <span>5 minutos</span> do Shopping Iguatemi Esplanada
        </div>
        <span className="line" />
        <div className="values">
          + de <span>8.500 m²</span> de área verde no entorno
        </div>
        <span className="line" />
        <a href="#contato">Falar com um especialista</a>
      </div>
    </ValueSectionStyle>
  );
};

export default ValuesSection;
