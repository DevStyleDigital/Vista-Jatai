import Acessos from 'assets/svg/AcessosIcon';
import Preparacao from 'assets/svg/preparacaoIcon';
import Ambientes from 'assets/svg/AmbientesIcon';
import { iDiferenciais } from 'types/diferenciais';
import Cobertura from 'assets/svg/CoberturaIcon';
import Apartamentos from 'assets/svg/apertamentos';
import Torres from 'assets/svg/TorresIcon';
import Vista from 'assets/svg/VistaIcon';
import Avenida from 'assets/svg/AvenidaIcon';
import Piscina from 'assets/svg/PiscinaIcon';
import AreaVerde from 'assets/svg/AreaVerde';
import Elevador from 'assets/svg/ElevadorIcon';
import Horta from 'assets/svg/Horta';
import Iluminacao from 'assets/svg/Iluminacao';
import Acelerador from 'assets/svg/acelador';
import Pedal from 'assets/svg/Pedal';
import Vazo from 'assets/svg/vazo';
import AutomacaoIcon from 'assets/svg/iconAutomacao';
import Varanda from 'assets/svg/Varanda';
import Piso from 'assets/svg/Piso';
import Garden from 'assets/svg/Garden';
import ArIcon from 'assets/svg/iconAr';
import Lajes from 'assets/svg/Lajes';
import Ceramica from 'assets/svg/ceramica';
import Selo from 'assets/svg/Selo';
import Portas from 'assets/svg/Portas';
import Molhada from 'assets/svg/Molhada';
import Adaptavel from 'assets/svg/adaptavel';
import Sensor from 'assets/svg/sensor';

export const DiferenciaisList: iDiferenciais[] = [
  {
    id: '1',
    type: 1,
    content: [
      {
        id: '11',
        label: 'Ambientes de lazer entregues decorados e equipados',
        icon: <Ambientes />,
      },
      {
        id: '22',
        label: 'Acessos cobertos de veículos e pedestres',
        icon: <Acessos />,
      },
      {
        id: '33',
        label: 'Preparação para portaria remota e CFTV perimetral',
        icon: <Preparacao />,
      },
      {
        id: '44',
        label: 'Cobertura com preenchimento termoacústico',
        icon: <Cobertura />,
      },
      {
        id: '55',
        label: '4 apartamentos por andar para maior privacidade',
        icon: <Apartamentos />,
      },
      {
        id: '66',
        label: 'Torres privativas com 12 metros de afastamento entre si',
        icon: <Torres />,
      },
      {
        id: '77',
        label: 'Vistas dos quartos e living para condomínio e área verde',
        icon: <Vista />,
      },
      {
        id: '88',
        label:
          'Avenida de acesso ao empreendimento iluminada com pista de caminhada',
        icon: <Avenida />,
      },
      {
        id: '99',
        label: 'Piscina com ducha e fechamento em gradil para maior segurança',
        icon: <Piscina />,
      },
      {
        id: '1010',
        label: 'Mais de 8.500 m2 de área verde no entorno',
        icon: <AreaVerde />,
      },
      {
        id: '1111',
        label: 'Elevadores com acabamento inox',
        icon: <Elevador />,
      },
    ],
  },
  {
    id: '2',
    type: 2,
    content: [
      {
        id: '13',
        label: 'Horta de especiarias e pomar',
        icon: <Horta />,
      },
      {
        id: '23',
        label: 'Iluminação em led nas áreas comuns',
        icon: <Iluminacao />,
      },
      {
        id: '31',
        label: 'Medição de energia individualizada',
        icon: <Acelerador />,
      },
      {
        id: '43',
        label: 'Pedal',
        icon: <Pedal />,
      },
      {
        id: '63',
        label: 'Sensores de presença nas áreas comuns',
        icon: <Sensor />,
      },
      {
        id: '73',
        label: 'Medição de água individualizada',
        icon: <Acelerador />,
      },
      {
        id: '83',
        label: 'Sistema dual flush nos vasos sanitários',
        icon: <Vazo />,
      },
      {
        id: '93',
        label: 'Medição de gás por torre',
        icon: <Acelerador />,
      },
    ],
  },
  {
    id: '3',
    type: 3,
    content: [
      {
        id: '12',
        label: 'Unidades com varanda',
        icon: <Varanda />,
      },
      {
        id: '24',
        label: 'Preparação para automação',
        icon: <AutomacaoIcon />,
      },
      {
        id: '32',
        label: 'Piso laminado nos quartos e living',
        icon: <Piso />,
      },
      {
        id: '42',
        label: 'Unidades com garden privativo e extensão da área de serviço',
        icon: <Garden />,
      },
      {
        id: '52',
        label: 'Planta modulada para aproveitamento máximo dos ambientes',
        icon: <Apartamentos />,
      },
      {
        id: '62',
        label: 'Previsão para ar-condicionado no living ou dormitório',
        icon: <ArIcon />,
      },
      {
        id: '72',
        label: 'Lajes e paredes maciças para maior conforto acústico',
        icon: <Lajes />,
      },
      {
        id: '82',
        label: 'Revestimento cerâmico no box do banheiro',
        icon: <Ceramica />,
      },
      {
        id: '92',
        label: 'Esquadrias e portas de madeira com certificados de qualidade',
        icon: <Selo />,
      },
      {
        id: '102',
        label: 'Portas com borracha de vedação',
        icon: <Portas />,
      },
      {
        id: '104',
        label: 'Áreas molhadas impermeabilizadas (cozinha, box e varanda)',
        icon: <Molhada />,
      },
      {
        id: '112',
        label: 'Unidades adaptáveis para suíte',
        icon: <Adaptavel />,
      },
    ],
  },
];
