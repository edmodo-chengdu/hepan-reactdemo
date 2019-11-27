import React from 'react';
import './App.css';
import ReduxDemo from "./pages/redux_demo/ReduxDemo";
import AsyncDemo from "./pages/async_demo/AsyncDemo";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import pageUrl from "./constants/pageUrl";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <hr/>
      <BrowserRouter>
        <Switch>
          <Route exact path={pageUrl.REDUX_DEMO} component={ReduxDemo}/>
          <Route exact path={pageUrl.ASYNC_DEMO} component={AsyncDemo}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
