/**
 * @module firebase.admin.commands.js
 * @author Martin Pacheco 
 */

 'use strict'

var fireAdmin = require('./firebase.connection');

var FireBaseAdminCommands = {
    fireBaseCreateUser: function(email,password){
        return fireAdmin
            .adminConnection()
            .app
            .auth()
            .createUser({
                email: email,
                password: password
            })
            .then(function(responseData){
                console.log(responseData.uid)
            })
            .catch(function(error){
                console.log(error);
            });
    }
}

module.exports = FireBaseAdminCommands;
