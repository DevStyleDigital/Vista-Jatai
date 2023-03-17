import Footer from '@components/footer';
import Hero from '@components/hero';
import AptosSection from '@components/sections/aptos';
import CarroselSection from '@components/sections/carrosel';
import DiferenciaisSection from '@components/sections/diferenciais';
import Fases from '@components/sections/fases';
import SectionForm from '@components/sections/forms';
import Header from '@components/Header';
import ItemsSection from '@components/sections/items';
import Mapa from '@components/sections/mapa';
import SectionImg from '@components/sections/sectionImg';
import Sobre from '@components/sections/sobre';
import ValuesSection from '@components/sections/values';
import Whatsapp from '@components/whatsapp';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Whatsapp />
      <ValuesSection />
      <SectionImg />
      <Fases />
      <Mapa />
      <ItemsSection />
      <CarroselSection />
      <AptosSection />
      <DiferenciaisSection />
      <SectionForm />
      <Sobre />
      <Footer />
    </>
  );
};

export default Home;
