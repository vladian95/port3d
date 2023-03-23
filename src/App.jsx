import { BrowserRouter } from 'react-router-dom';
import {
  Hero,
  Navbar,
  About,
  Contact,
  Experience,
  Footer,
  Tech,
  Works,
  StarsCanvas,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          {/* <Footer /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
