import { Footer, Navbar } from '../components';
import { About, GetStarted, Explore, Hero, Projects, Skills } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Skills />
    </div>
    <div className="relative">
      <Projects />
      <div className="gradient-04 z-0" />
      <Explore />
    </div>
    <GetStarted />
    <Footer />
  </div>
);

export default Page;
