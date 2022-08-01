import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";

ReactDOM.render(

    // HashRouter is useed instead of BrowserRouter since github pages does not work with it
    <HashRouter>
        <App />
    </HashRouter>,
document.getElementById('root'));

