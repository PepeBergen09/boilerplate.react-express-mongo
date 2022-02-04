import React from "react";
import { Route , Switch } from 'react-router-dom';
import Home from "./core/Home";
import Data from "./core/crud/Data";
import CreateData from "./core/crud/CreateData";
import UpdateData from "./core/crud/UpdateData";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/data" component={Data}></Route> */}
            <Route exact path="/data" component={Data}></Route>
            <Route exact path="/createdata" component={CreateData}></Route>
            <Route exact path="/updatedata" component={UpdateData}></Route>
        </Switch>
    </div>
)

export default MainRouter;