import { JsForceModule } from "./jsforce.module";
import { JsForceConfigOptions } from "./common/interfaces";
import { JSFORCE_MODULE_OPTIONS } from "./common";
import { config } from "rxjs";

describe('JsForceModule', () => {
    describe('forRoot', () => {
        let config: JsForceConfigOptions = {
            username: 'dexter.hardy@testaccount.com.sb01',
            password: 'somepassword',
            options: {
                loginUrl: 'https://someaccount--sb01.my.salesforce.com/'
            }
        };
        it('should be DynamicModule', () => {
            const dynamicModule = JsForceModule.forRoot(config);

            expect(dynamicModule).toBeDefined();
        })

        it('should be DynamicModule', () => {
            const dynamicModule = JsForceModule.forRootAsync({
                useFactory: () => config
            });

            expect(dynamicModule).toBeDefined();

            expect(dynamicModule).toMatchObject({
                imports: [],
                module: JsForceModule,
                providers: [
                    {
                        inject: [],
                        provide: 'JSFORCE_MODULE_OPTIONS',
                    },
                ],
            });
            
        })
    });
})