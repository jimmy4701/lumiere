import React from 'react'
import { render } from 'react-dom'

Meteor.startup(() => {
    console.log('CLIENT : init')
    render(
        <p>izejfoizjef</p>, document.getElementById('root')
    )
})