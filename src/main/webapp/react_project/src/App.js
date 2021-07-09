import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Authorize from './components/Authorization/Authorize';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="App">
                <Route path="/authorization" component={Authorize}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/mainPage" component={MainPage}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
