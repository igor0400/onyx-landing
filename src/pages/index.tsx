import { PageWrapper } from '../shared';
import Cards from '../widgets/home-page/Cards';
import Features from '../widgets/home-page/Features';
import Partners from '../widgets/home-page/Partners';
import Screens from '../widgets/home-page/Screens';
import Title from '../widgets/home-page/Title';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Cards />
      <Features />
      <Partners />
      <Screens />
    </PageWrapper>
  );
}
