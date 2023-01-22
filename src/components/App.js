import About from './About';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';
import Testimonials from './Testimonials';

const App = () => (
  <div>
    <Header />
    <main>
      <About />
      <Services />
      <Testimonials />
      <Projects />
    </main>
    <Footer />
  </div>
);

export default App;
