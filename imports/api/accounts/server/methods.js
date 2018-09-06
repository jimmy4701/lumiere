import {Meteor} from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    'accounts.signup'(user_data){
        console.log('ACCOUNTS API: SIGNUP', user_data)
        const {username, email, password} = user_data
        Accounts.createUser({username, email, password})
    }
})