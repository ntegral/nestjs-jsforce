"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsforce = require("jsforce");
let conn = new jsforce.Connection({
    loginUrl: 'https://lvngbook--sb01.my.salesforce.com/',
});
conn.login('dexter.hardy@lvngbook.com.sb01', 'C0n$ult!ng' + '8jMpmFUnf2DNJCISYXBY5V6ju', ((err, result) => {
    if (err) {
        return console.log('error logging in', err);
    }
    conn.sobject("Recipe__c").select().exec(undefined, (err, result) => {
        if (err) {
            return console.error(err);
        }
        console.log('results', result);
    });
    conn.sobject("Contact").select().exec(undefined, (err, result) => {
        if (err) {
            return console.error(err);
        }
        console.log('results', result);
    });
}));
