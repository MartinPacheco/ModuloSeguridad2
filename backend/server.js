/**
 *  @module server.js
 *  @author Martin Pacheco.
 *  @description Especificacion del servidor.
 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var firebase = require('./helpers/firebase.commands');
var fireadmin = require('./helpers/firebase.admin.commands');

// firebase.loginWithUsernameAndPassword('user@example.com','secretPassword');
//fireadmin.fireBaseCreateUser('test@testttt.com','testttt');
