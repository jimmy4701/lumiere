import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Landing, UserPage } from '/imports/pages'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/user" exact component={UserPage} />
            </Switch>
        </Router>
    )
}

export default App