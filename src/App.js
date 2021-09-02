import './App.css';
import Main from './components/main.js'
import {Provider} from "react-redux"
import store from "./redux/configureStore.js"
import MobileNav from "../src/components/mobileNav"
import DesktopHeader from './components/desktopHeader';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MobileNav />
    <DesktopHeader/>
    <Main/>
    </div>
    </Provider>
  );
}

export default App;
