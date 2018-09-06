import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Landing from '/imports/pages/Landing'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
            </Switch>
        </Router>
    )
}

export default App