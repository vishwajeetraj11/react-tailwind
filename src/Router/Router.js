import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom"
import Navigation from "../Components/Navigation/Navigation"
import Landing from "../Components/Landing/Landing"
import Footer from "../Components/Footer/Footer"
import React from "react"

 const Routes = () => {
    return (
        <Router>
        <Navigation />
        <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/projects" component={() => null}></Route>
        <Redirect from="*" to="/" />
        </Switch>
        <Footer />
        </Router>
    )
}

export default Routes