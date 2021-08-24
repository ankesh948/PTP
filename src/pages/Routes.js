import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/404'


const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/" component={Home}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
        </>
        )
}

export default Routes;
