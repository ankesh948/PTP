import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PageNotFound from './404'


const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
        </>
        )
}

export default Routes;
