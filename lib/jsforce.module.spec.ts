import { Test } from '@nestjs/testing';
import { JsForceModule } from "./jsforce.module";
import { JsForceConfigOptions, JsForceConfigOptionsFactory } from "./common/interfaces";
import { JSFORCE_TOKEN } from "./common";
import { Client } from './client';

describe('JsForceModule', () => {
    let config: JsForceConfigOptions = {
        username: 'dexter.hardy@testaccount.com.sb01',
        password: 'somepassword',
        options: {
            loginUrl: 'https://someaccount--sb01.my.salesforce.com/'
        }
    };

    class TestService implements JsForceConfigOptionsFactory {
        createJsForceOptions(): JsForceConfigOptions {
            return config;
        }
    }

    describe('forRoot 1.0', () => {
        it('should provide the jsforce client', async() => {
            const mod = await Test.createTestingModule({
                imports: [JsForceModule.forRoot(config)],
            }).compile();

            const jsforceClient = mod.get<Client>(JSFORCE_TOKEN);
            expect(jsforceClient).toBeDefined();
            expect(jsforceClient).toBeInstanceOf(Client);
        })
    });

    describe('forRootAsync 1.0', () => {
        describe('when the `useFactory` option is used', () => {
            it('should provide the jsforce client', async () => {
                const mod = await Test.createTestingModule({
                    imports: [
                        JsForceModule.forRootAsync({
                            useFactory: () => (config),
                        }),
                    ]
                }).compile();

                const jsforceClient = mod.get<Client>(JSFORCE_TOKEN);
                expect(jsforceClient).toBeDefined();
                expect(jsforceClient).toBeInstanceOf(Client);
            });
        })
    });

    describe('when the `useClass` option is used', () => {
        it('should provide the jsforce client', async () => {
            const mod = await Test.createTestingModule({
                imports: [
                    JsForceModule.forRootAsync({
                        useClass: TestService
                    })
                ]
            }).compile();

            const jsforceClient = mod.get<Client>(JSFORCE_TOKEN);
            expect(jsforceClient).toBeDefined();
            expect(jsforceClient).toBeInstanceOf(Client);
        });
    })
    describe('forRoot', () => {
        /* let config: JsForceConfigOptions = {
            username: 'dexter.hardy@testaccount.com.sb01',
            password: 'somepassword',
            options: {
                loginUrl: 'https://someaccount--sb01.my.salesforce.com/'
            }
        }; */
        it('should be DynamicModule', () => {
            const dynamicModule = JsForceModule.forRoot(config);

            expect(dynamicModule).toBeDefined();
        })

        it('should be DynamicModule', () => {
            const dynamicModule = JsForceModule.forRootAsync({
                useFactory: () => config
            });

            expect(dynamicModule).toBeDefined();            
        })
    });
})