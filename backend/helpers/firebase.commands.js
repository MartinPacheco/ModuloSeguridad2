/**
 * @module firebase.commands.js
 * @author Martin Pacheco
 */

 'use strict'

 const firebase = require('./firebase.connection');
 const firedbData = require('../firebase.config.json');

 /**
  * Comandos disponibles para firebase(usuario)
  */
var FirebaseCommand = {
    /**
     * Metodo para logueo por correo y password en
     * firebase.
     * @param {string} username 
     * @param {string} password 
     */
    loginWithUsernameAndPassword: function(username, password){
        return firebase
            .userConnection(firedbData.fbKeys)
            .auth()
            .signInWithEmailAndPassword(
                username,
                password
            )
            .then(function(responseData){
                console.log(responseData.user.uid);
            })
            .catch(function(error){
                console.log('error signin ');
            });
    }
};

module.exports = FirebaseCommand;
