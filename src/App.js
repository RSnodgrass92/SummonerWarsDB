import './App.css';
import Main from './components/main.js'
import {Provider} from "react-redux"
import store from "./redux/configureStore.js"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <h1 className="text-center">Summoner Wars DB</h1>
    <Main/>
    </div>
    </Provider>
  );
}

export default App;
