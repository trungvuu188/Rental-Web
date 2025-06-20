import React from "react";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";
import Popup from "./Components/PopupBanner/Popup";
import Routes from "./routes";
import "./App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Popup />
      <ScrollToTop />
      <Routes />
      <Toaster />
    </>
  );
};

export default App;
