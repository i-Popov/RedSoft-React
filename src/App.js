import React from 'react'
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import FeaturedContent from "./components/FeaturedContent/FeaturedContent";
//import "../static/assets/styles/index.scss"

function App() {
  return (
      <>
          <Header />
          <Slider />
          <FeaturedContent/>
      </>
  );
}

export default App;
