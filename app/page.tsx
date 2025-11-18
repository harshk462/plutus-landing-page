import FAQS from "./_sections/faqs/faqs";
import LandingFooter from "./_sections/footer/footer";
import { Navbar } from "./_sections/header/_components/navbar";
import { Header } from "./_sections/header/header";
import HomepageStrip from "./_sections/homepage-strip/strip";
import Map from "./_sections/map/map";
import PredictNow from "./_sections/predict-now/predict-now";
import Testimonials from "./_sections/testimonials/testimonials";
import TopGames from "./_sections/top-games/topGames";

export default function Home() {
  return (
    <>
    <Navbar/>
      <Header />
      <HomepageStrip/>
      <TopGames/>
      <PredictNow/>
      <Testimonials/>
      <Map/>
      <FAQS/>
      <LandingFooter/>
      {/* <main>
        <h1>Plutus Landing Page</h1>
      </main> */}
    </>
  );
}
