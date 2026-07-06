import Header from '../../components/Header/Header';
import MainBanner from './MainBanner/MainBanner';
import MainCategory from './MainCategory/MainCategory';
import BestSeller from './BestSeller/BestSeller';
import './MainPage.css';
import Deals from './Deals/Deals';
import Comments from './Comments/Comments';
import InstagramStories from './InstagramStories/InstagramStories';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import DriverMenu from '../../components/DriverMenu/DriverMenu';

export default function MainPage() {
  return (
    <>
      <title>Crimba</title>
      <MainBanner />
      <MainCategory />
      <BestSeller />
      <Deals />
      <Comments />
      <InstagramStories />
      <Features />
      <Footer />
    </>
  )
}
