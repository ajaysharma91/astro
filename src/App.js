import logo from './logo.svg';
import theme from './component/ui/Theme';
import { ThemeProvider } from '@material-ui/core';
import Header from './component/ui/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BannerCarousel from './component/ui/BannerCarousel';
import ZodiacSign from './component/ui/ZodiacSign';
import Astrologgers from './component/ui/Astrologgers';
import AstrologgerTalks from './component/ui/AstrologgerTalks';
import Services from './component/ui/Services';
import ServicesItems from './component/ui/ServicesSlick';
import BorderSubtractive from './component/ui/Dashes';
import DashesMain from './component/ui/DashesMain';
import Testimonial from './component/ui/Testimonial';
import Footer from './component/ui/Footer/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header/>
      <BannerCarousel/>
      <ZodiacSign/>
      <AstrologgerTalks/>
      <Services/>
      <DashesMain/>
      <Testimonial/>
      <Footer/>
      <Switch>
        <Route/>
      </Switch>
      </Router>
     

    </ThemeProvider>
  );
}

export default App;
