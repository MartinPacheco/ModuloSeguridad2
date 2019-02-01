/**
 * @module sqlcommand.js
 * @author Martin Pacheco.
 */

 'use strict'

 var sqlConnection = require('./sql.connection.js');
 var xxx = sqlConnection.prototype.connect();

 class SQLCommand {
     constructor(){ }
     execute(params, command, connection){
        const sql = require('mssql');
        sql.on('error', err => {
            console.log(err);
        });

     }
 }

 module.exports = SQLCommand;
