import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import DemoAccounts from "./components/ui/demo-accounts";
import './assets/scss/main.scss';
import Popup from "./components/PopupBanner/Popup";
import ScrollToTop from "./components/ScrollButton/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Chatbox from "./components/Chatbox/Chatbox";

function App() {
  return (
    <Provider store={store}>
      <Popup />
      <ScrollToTop />
      <Routes />
      <Toaster />
      <DemoAccounts />
      <Chatbox />
    </Provider>
  );
}

export default App;
