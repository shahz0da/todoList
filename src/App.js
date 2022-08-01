import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from './components/Home'

function App() {
  return (
    <Provider store={store}>
      <Home></Home>

   </Provider>
  
  );
}


export default App;
