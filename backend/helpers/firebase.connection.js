/**
 * @module firebase.connection.js
 * @author Martin Pacheco
 */

'use strict'

// function FireBaseConnection(config) {
//     const fbInitializate = require('firebase-admin');
//     const serviceKey = require('../serviceAccountKey.json');
//     var fbConfig = {
//         apiKey: isNaN(config.apiKey) ? '' : config.apiKey,
//         authDomain: isNaN(config.authDomain) ? '' : config.authDomain,
//         databaseURL: isNaN(config.databaseURL) ? '' : config.databaseURL,
//         projectId: isNaN(config.projectId) ? '' : config.projectId,
//         storageBucket: isNaN(config.storageBucket) ? '' : config.storageBucket,
//         messagingSenderId: isNaN(config.messagingSenderId) ? '' : config.messagingSenderId,
//     };
//     return fbInitializate
//         .initializeApp({
//             credential: fbInitializate.credential.cert(serviceKey),
//             databaseURL: "https://ga-security-app.firebaseio.com"
//         })
//         .database();
// }

var Connection = {
    adminConnection: function (config) {
        const fbInitializate = require('firebase-admin');
        const serviceKey = require('../serviceAccountKey.json');
        var fbConfig = {
            apiKey: isNaN(config.apiKey) ? '' : config.apiKey,
            authDomain: isNaN(config.authDomain) ? '' : config.authDomain,
            databaseURL: isNaN(config.databaseURL) ? '' : config.databaseURL,
            projectId: isNaN(config.projectId) ? '' : config.projectId,
            storageBucket: isNaN(config.storageBucket) ? '' : config.storageBucket,
            messagingSenderId: isNaN(config.messagingSenderId) ? '' : config.messagingSenderId,
        };
        return fbInitializate
            .initializeApp({
                credential: fbInitializate.credential.cert(serviceKey),
                databaseURL: "https://ga-security-app.firebaseio.com"
            })
            .database();
    }
};

module.exports = Connection;
