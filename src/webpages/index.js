import React from 'react';
import { BrowserRouter , Route , Switch} from "react-router-dom";
import Home from './home';
import User from './user';
const Webpages=()=> {
    return(
        <BrowserRouter>
        

            
            <Route exact path="/"> <Home /></Route>
            <Route path="/user"> <User /></Route>
        </BrowserRouter>
    );
};
export default Webpages;