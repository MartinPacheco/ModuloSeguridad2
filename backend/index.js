/**
 * @module index.js
 * @author Martin Pacheco
 */

'use strict';

var firebase =  require('./helpers/firebase.connection');
const config = require('./firebase.config.json');

var fbconsole = firebase.adminConnection(config);
// fbconsole.app.auth().createUser({
//     email: "user@example.com",
//     emailVerified: false,
//     phoneNumber: "+11234567890",
//     password: "secretPassword",
//     displayName: "John Doe",
//     photoURL: "http://www.example.com/12345678/photo.png",
//     disabled: false
//   })
//     .then(function(userRecord) {
//       // See the UserRecord reference doc for the contents of userRecord.
//       console.log("Successfully created new user:", userRecord.uid);
//     })
//     .catch(function(error) {
//       console.log("Error creating new user:", error);
//     });
