import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Screen/Home";
import Search from "../Screen/Search";
import Tv from "../Screen/TV";

// 화면이동. url은 소문자
export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/tv" exact component={Tv} />
        </>
    </Router>
)