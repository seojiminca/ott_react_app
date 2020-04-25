import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Screen/Home";  //index를 기본으로 가지고 온다.
import Search from "../Screen/Search";
import TV from "../Screen/TV";
import Header from "./Header";
import Detail from "../Screen/Detail";

// 단순 기능만 필요해서 class형으로 사용하지않아도 된다.
// export.default 를 따로 밑에 적지않고 바로 적어서 내보낸다.
// 화면이동. url은 소문자
export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/tv" exact component={TV} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)