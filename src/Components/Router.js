import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Screen/Home";
import Search from "../Screen/Search";
import Tv from "../Screen/TV";

//단순 기능만 필요해서 class형으로 사용하지않아도 된다.
// export.default 를 이용해서 바로 내보낸다.
// 화면이동. url은 소문자
export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/tv" exact component={Tv} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)