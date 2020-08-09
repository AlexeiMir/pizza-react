import React from 'react';
import './scss/app.scss';
import {Header} from "./components"
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";

import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()


    return (
        <div className="wrapper">
          <Header/>
            <div className="content">
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/cart'} render={() => <Cart/>}/>
                </div>
        </div>
    );
}




export default App;
