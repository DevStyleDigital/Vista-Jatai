import Form from '@components/form';
import { SectionFormStyle } from './style';

const SectionForm = () => {
  return (
    <SectionFormStyle id="contato">
      <h1 className="title">
        Surpreenda-se com o <strong>Apartamento Decorado!</strong>
      </h1>
      <Form />
    </SectionFormStyle>
  );
};

export default SectionForm;
