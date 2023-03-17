import Image from 'next/image';
import { SobreStyle } from './style';

const Sobre = () => {
  return (
    <SobreStyle id="sobre">
      <div className="images">
        <Image
          src="/img/Institucional.png"
          alt="banner-sobre"
          width={1920}
          height={700}
          className="man"
        />
        <Image
          src="/img/logoJulio.png"
          alt="banner-logo"
          width={1920}
          height={700}
          className="logo"
        />
      </div>
      <div className="text">
        <div className="title">
          Realizamos milhares de sonhos com qualidade e dentro do prazo.
        </div>
        <div className="block">
          Já são mais de 5 milhões de metros quadrados construídos dos diversos
          empreendimentos imobiliários espalhados por Sorocaba e região, como o
          Parque Campolim, Belvedere I e II, Parque Jataí I e II, Ibiti Royal,
          Ibiti Reserva, Terras de São Francisco entre outros.
        </div>
        <div className="block">
          Somos especialistas em comercialização e construção de apartamentos,
          bairros planejados e residenciais fechados, somado a tudo isso temos
          grandes parcerias com instituições públicas, fazendo parte da expansão
          e história das cidades de Sorocaba e Votorantim. Destacam-se:
        </div>
        <div className="block">
          Marginal Sorocaba, Av. Gisele Constantino, Av. Antonio Carlos Comitre,
          Av. Itavuvu, Av. Ipanema, Av. Eng. Carlos Reinaldo Mendes, Av. São
          João, Av. São Paulo, entre outras.
        </div>

        <div className="block">
          Julio & Julio, especialistas em construir histórias.
        </div>
      </div>
    </SobreStyle>
  );
};

export default Sobre;
