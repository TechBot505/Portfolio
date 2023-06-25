import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Projects, WhatsNew, Skills } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Skills />
    </div>
    {/* <Explore /> */}
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <Projects />
      {/* <WhatsNew /> */}
    </div>
    <Footer />
  </div>
);

export default Page;
