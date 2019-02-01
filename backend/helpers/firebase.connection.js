/**
 * @module firebase.connection.js
 * @author Martin Pacheco
 */

'use strict'

/**
 * Conexiones para firebase.
 */
var Connection = {

     /**
      * Conexion tipo administrador.
      */
    adminConnection: function () {
        const fbInitializate = require('firebase-admin');
        const serviceKey = require('../serviceAccountKey.json');
        return fbInitializate
            .initializeApp({
                credential: fbInitializate.credential.cert(serviceKey),
                databaseURL: "https://ga-security-app.firebaseio.com"
            })
            .database();
    },

    /**
     * Conexion tipo usuario.
     * @param {any} config 
     */
    userConnection: function(config){
        const fbInit = require('firebase');
        var fbConfig = {
            apiKey: config.apiKey,
            authDomain: config.authDomain,
            databaseURL: config.databaseURL,
            projectId: config.projectId,
            storageBucket: config.storageBucket,
            messagingSenderId: config.messagingSenderId
        }
        return fbInit.initializeApp(fbConfig);
    }
};

module.exports = Connection;
