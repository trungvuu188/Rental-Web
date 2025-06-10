import React from "react";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";
import Popup from "./Components/PopupBanner/Popup";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <Popup />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
