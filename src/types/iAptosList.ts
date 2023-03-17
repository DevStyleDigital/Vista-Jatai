export interface iAptosList {
  id: string;
  size: React.ReactElement;
  type: number;
  detalhes: {
    suite: string;
    vagas: string;
    diferencial: string;
  };
  diferenciais: {
    id: string;
    name: string;
    icon: React.ReactNode;
  }[];
  image: string;
}
