import About from '../components/about';
import Banner from '../components/banner';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import { OurServices } from '../components/our-services';
import Places from '../components/places';
import { WhatWeDo } from '../components/what-we-do';

export default function Home() {
  return (
    <div className='h-screen'>
      <Header />
      <Banner />
      <main>
        <div className='bg-biovitoria text-white'>
          <div className='container mx-auto px-4 py-16 h-full'>
            <WhatWeDo />
          </div>
        </div>
        <div className='bg-gray-50 text-white'>
          <div className='container mx-auto px-4 py-16'>
            <OurServices />
          </div>
        </div>
        <div className='bg-pink-100 text-white'>
          <div className='container mx-auto px-4 py-16'>
            <Places />
          </div>
        </div>
        <div className='bg-gray-400 text-white'>
          <div className='container mx-auto px-4 py-16'>
            <About />
          </div>
        </div>
        <div className='bg-gray-50 text-blue-900'>
          <div className='container mx-auto px-4 py-16'>
            <Contact />
          </div>
        </div>
      </main>

      <footer>
        <div className='bg-biovitoria text-white'>
          <div className='container mx-auto px-4 py-16'>
            <Footer />
          </div>
        </div>
      </footer>
    </div>
  );
}
