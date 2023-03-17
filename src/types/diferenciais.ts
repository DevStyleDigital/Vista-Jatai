export interface iDiferenciais {
  id: string;
  type: number;
  content: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }[];
}
