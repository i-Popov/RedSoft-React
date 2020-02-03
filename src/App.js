import React from 'react'
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import FeaturedContent from "./components/FeaturedContent/FeaturedContent";
import PropertiesContent from "./components/PropertiesContent/PropertiesContent";
import AppDescription from "./components/AppDescription/AppDescription";
import SpecialContent from "./components/SpecialContent/SpecialContent";
import SubscribeList from "./components/SubscribeList/SubscribeList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
          <Header />
          <Slider />
          <FeaturedContent />
          <PropertiesContent />
          <AppDescription />
          <SpecialContent />
          <SubscribeList/>
          <Footer/>
      </>
  );
}

export default App;
