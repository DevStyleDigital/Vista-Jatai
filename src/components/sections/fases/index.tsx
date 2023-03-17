import { FasesStyle } from './style';

const Fases = () => {
  return (
    <FasesStyle id="localizacao">
      <div className="texts">
        <div className="escolha">
          Escolha o bem estar de viver <br />
          <span>em um bairro tranquilo e arborizado</span>
        </div>
        <div className="endereco">
          Av. Antônio Lopes dos Santos, 875{' '}
          <span>Parque Jataí - Votorantim</span>
        </div>
      </div>
    </FasesStyle>
  );
};

export default Fases;
