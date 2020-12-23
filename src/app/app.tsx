import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes'

export const App = () : JSX.Element => {
    return(
        <Router>
            <Switch>
                {
                    routes.map((route) => {
                        return(
                            <Route exact={route.exact} path={route.path} component={route.component} />
                        )
                    })
                }
            </Switch>
        </Router>
    )
}