import React from 'react'
import { render } from 'react-dom'
import App from '/imports/startup/App'

Meteor.startup(() => {
    console.log('CLIENT : init')
    render(
        <App/>, document.getElementById('root')
    )
})