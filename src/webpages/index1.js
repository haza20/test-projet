import React from 'react';
import {BrowserRouter as Router,Route , Routes} from "react-router-dom";
import Home from './home';
import User from './user';
import PostsList from './postslist';
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/posts/:id" element={<PostsList />} />
            </Routes>
        </Router>
    );
};
export default Webpages;