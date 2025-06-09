import { Provider } from "react-redux";
import Routes from "./routes";
import { store } from "./store";
import DemoAccounts from "./components/ui/demo-accounts";
import './assets/scss/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <DemoAccounts />
    </Provider>
  );
}

export default App;
