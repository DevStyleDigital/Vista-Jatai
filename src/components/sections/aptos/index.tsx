import { AptosList } from '@utils/aptos';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AptosSectionStyle } from './style';

const AptosSection = () => {
  const [viewApto, setViewApto] = useState(1);
  const ChangeButton = (button: number) => {
    if (button === viewApto) return;
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].className.includes('active')) {
        buttons[i].classList.remove('active');
      }
    }
    const buttonSelect = document.getElementById(`button${button}`);
    buttonSelect?.classList.add('active');
    setViewApto(button);
  };
  return (
    <AptosSectionStyle id="plantas">
      {AptosList.filter((e) => e.type === viewApto).map((item) => (
        <>
          <div className="text">
            <div className="title">
              {item.size}
              <div className="line" />
            </div>
            <Link href="#contato">Agende sua visita ao Decorado</Link>
            <div className="content">
              <span>{item.detalhes.suite}</span>
              <span>{item.detalhes.vagas}</span>
              <span>{item.detalhes.diferencial}</span>
            </div>
            <div className="diferenciais">
              {item.diferenciais.map((element) => (
                <div key={element.id} className="diferencial">
                  {element.icon}
                  {element.name}
                </div>
              ))}
            </div>
          </div>
          <div className="aptos">
            <Image
              src={item.image}
              alt="banner-apto"
              width={700}
              height={400}
            />
          </div>
        </>
      ))}
      <div className="buttons">
        <button
          type="button"
          id="button1"
          className="button active"
          onClick={() => ChangeButton(1)}
        >
          Versão Padrao
        </button>
        <button
          type="button"
          id="button2"
          className="button"
          onClick={() => ChangeButton(2)}
        >
          Versão Suíte
        </button>
        <button
          type="button"
          id="button3"
          className="button"
          onClick={() => ChangeButton(3)}
        >
          Versão Garden
        </button>
      </div>
    </AptosSectionStyle>
  );
};

export default AptosSection;
