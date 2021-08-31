import './App.css';
import Main from './components/main.js'
import {Provider} from "react-redux"
import store from "./redux/configureStore.js"
import MobileNav from "../src/components/mobileNav"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MobileNav />
    <h1 className="d-none d-lg-block page-title text-center">Summoner Wars DB</h1>
    <Main/>
    </div>
    </Provider>
  );
}

export default App;
