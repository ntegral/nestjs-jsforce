import * as jsforce from 'jsforce';
import { Client } from "./client";
import { JsForceConfigOptions } from "./common/interfaces";

describe('JsForce Client', () => {
    let client: Client;
    let config: JsForceConfigOptions = {
        username: 'someuser@sfdx.com.stg02',
        password: 'SomePassword',
        options: {
            loginUrl: 'https://sfdx--stg02.my.salesforce.com/'
        }
    };

    describe('constructor', () => {
        client = new Client(config);
        it('client should be initialized', () => {
            expect(client).toBeInstanceOf(Client);
        });
    });

    describe('constructor with security_token', () => {
        config.security_token = 'HDL9olFmXa2FxxxxQDKDoK54';
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