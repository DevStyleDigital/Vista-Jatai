import { ItemsSectionStyle } from './style';

const ItemsSection = () => {
  return (
    <ItemsSectionStyle id="lazer">
      <div className="texts">
        <div className="loteamento">
          + de <span>15 itens</span> de lazer e áreas comuns
        </div>
        <span className="line" />
        <div className="values">Ambientes entregues equipados e decorados</div>
        <span className="line" />
        <a href="#contato">Falar com um especialista</a>
      </div>
    </ItemsSectionStyle>
  );
};

export default ItemsSection;
