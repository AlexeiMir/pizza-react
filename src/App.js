import React, {useEffect} from 'react';
import './scss/app.scss';
import {Header} from "./components"
import {Home,Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";

function App() {
    const [pizzas,setPizzas] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))
    },[])


    return (
        <div className="wrapper">
          <Header/>
            <div className="content">
              <Route exact path={'/'} render={() => <Home pizzas={pizzas}/>}/>
              <Route exact path={'/cart'} render={() => <Cart/>}/>
                </div>
        </div>
    );
}

export default App;
