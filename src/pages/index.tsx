import { PageWrapper } from '../shared';
import Benefits from '../widgets/home-page/Benefits';
import Cards from '../widgets/home-page/Cards';
import Contacts from '../widgets/home-page/Contacts';
import Features from '../widgets/home-page/Features';
import Partners from '../widgets/home-page/Partners';
import Roadmap from '../widgets/home-page/Roadmap';
import Screens from '../widgets/home-page/Screens';
import Seller from '../widgets/home-page/Seller';
import Title from '../widgets/home-page/Title';
import Winners from '../widgets/home-page/Winners';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Cards />
      <Features />
      <Partners />
      <Screens />
      <Roadmap />
      <Seller />
      <Winners />
      <Benefits />
      <Contacts />
    </PageWrapper>
  );
}
