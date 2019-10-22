import * as jsforce from 'jsforce';
import { Client } from "./client";
import { JsForceConfigOptions } from "./common/interfaces";

describe('JsForce Client', () => {
    let client: Client;
    let config: JsForceConfigOptions = {
        username: 'dexter.hardy@lvngbook.com.sb01',
        password: 'C0n$ult!ng',
        options: {
            loginUrl: 'https://lvngbook--sb01.my.salesforce.com/'
        }
    };

    describe('constructor', () => {
        client = new Client(config);
        it('client should be initialized', () => {
            expect(client).toBeInstanceOf(Client);
        });
    });

    describe('constructor with security_token', () => {
        config.security_token = '8jMpmFUnf2DNJCISYXBY5V6ju';
        client = new Client(config);
        it('client should be initialized with security_token', () => {
            expect(client.conn).toBeInstanceOf(jsforce.Connection);
        });

        it('connection access_token should be defined', async() => {
            await client.initialization;
            expect(client.conn.accessToken).toBeDefined();
        });

        it('logout', async () => {
            let result = await client.conn.logout();
            console.log('logout result', result);
            expect(result).toBeUndefined();
        });

        /* it('logout function', async()=> {
            await client.initialization;
            expect(await client.conn.logout()).toBeUndefined();
        }); */
    });
});