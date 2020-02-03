import React from 'react'
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import FeaturedContent from "./components/FeaturedContent/FeaturedContent";
import PropertiesContent from "./components/PropertiesContent/PropertiesContent";
import AppDescription from "./components/AppDescription/AppDescription";
//import "../static/assets/styles/index.scss"

function App() {
  return (
      <>
          <Header />
          <Slider />
          <FeaturedContent />
          <PropertiesContent />
          <AppDescription />
      </>
  );
}

export default App;
