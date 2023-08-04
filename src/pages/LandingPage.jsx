import FirstMain from '../Component/Landingpage/FirstMain';
import Header from '../Component/Landingpage/Header';
import Navbar from '../Component/Landingpage/Navbar';
import Secondmain from '../Component/Landingpage/Secondmain';
import Thirdmain from '../Component/Landingpage/Thirdmain';
import Slider from '../Component/Landingpage/Slider';
import Cards from '../Component/Landingpage/Cards';
import FAQSection from '../Component/Landingpage/FAQSection';
// import Footer from '../Component/Landingpage/Footer';

import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <FirstMain />
      <Secondmain />
      <Thirdmain />
      <Slider />
      <Cards />
      <FAQSection />
      {/* <Footer /> */}
    </div>
  )
}
