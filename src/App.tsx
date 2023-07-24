import { Provider } from "react-redux"
import { store } from './store/store';
import { Navigation } from "./routes/Navigation";
import { HashRouter } from "react-router-dom";
import { Suspense } from "react";

function App() {


  return (
    <Provider store={store}>      
      {/* <Suspense fallback={<Preloader/>} > */}
      <Suspense fallback={'loading...'} >
        <HashRouter>          
            <Navigation />        
        </HashRouter>
      </Suspense>
    </Provider>
  )
}

export default App
