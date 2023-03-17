import ArIcon from 'assets/svg/iconAr';
import AutomacaoIcon from 'assets/svg/iconAutomacao';
import { iAptosList } from 'types/iAptosList';

export const AptosList: iAptosList[] = [
  {
    id: '1',
    size: (
      <h1>
        Aptos de <strong>50m²</strong>
      </h1>
    ),
    type: 1,
    detalhes: {
      suite: '2 Dormitórios',
      vagas: 'Até 2 Vagas',
      diferencial: 'Varanda',
    },
    diferenciais: [
      {
        id: '11',
        name: 'Preparação para Automação',
        icon: <AutomacaoIcon />,
      },
      {
        id: '22',
        name: 'Previsão para Ar-condicionado',
        icon: <ArIcon />,
      },
    ],
    image: '/img/planta1.png',
  },
  {
    id: '2',
    size: (
      <h1>
        Aptos de <strong>50m²</strong>
      </h1>
    ),
    type: 2,
    detalhes: {
      suite: '1 Suíte',
      vagas: 'Até 2 Vagas',
      diferencial: 'Varanda',
    },
    diferenciais: [
      {
        id: '13',
        name: 'Preparação para Automação',
        icon: <AutomacaoIcon />,
      },
      {
        id: '23',
        name: 'Previsão para Ar-condicionado',
        icon: <ArIcon />,
      },
    ],
    image: '/img/planta2.png',
  },
  {
    id: '3',
    size: (
      <h1>
        Aptos de <strong>50m²</strong>
      </h1>
    ),
    type: 3,
    detalhes: {
      suite: '2 Dormitórios',
      vagas: 'Até 2 Vagas',
      diferencial: 'Garden Privativo',
    },
    diferenciais: [
      {
        id: '14',
        name: 'Preparação para Automação',
        icon: <AutomacaoIcon />,
      },
      {
        id: '24',
        name: 'Previsão para Ar-condicionado',
        icon: <ArIcon />,
      },
    ],
    image: '/img/planta3.png',
  },
];
