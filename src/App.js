import { Provider } from "react-redux";
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
    <div className=''>
      {/* <h1 className='bg-red-800 font-bold'>Namaste Youtube!</h1> */}
      <Head/>
      <Body/>
      {/* {
        HEAD
        BODY
        SIDEBAR
           MENUITEMS
         MAINCONTAINER
            BUTTONLIST
            VIDEOCONTAINER
            VIDEOCARD  
      } */}
    </div>
    </Provider>
  );
}

export default App;
