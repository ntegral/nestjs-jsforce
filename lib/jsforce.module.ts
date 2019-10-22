import { DynamicModule, Module } from '@nestjs/common';

import { JsForceCoreModule } from './jsforce-core.module';
import { JsForceConfigAsyncOptions, JsForceConfigOptions } from './common/interfaces';

@Module({})
export class JsForceModule {
    public static forRoot(options: JsForceConfigOptions): DynamicModule {
        return {
            module: JsForceModule,
            imports: [ JsForceCoreModule.forRoot(options as JsForceConfigOptions)]
        };
    }

    public static forRootAsync(options: JsForceConfigAsyncOptions): DynamicModule {
        return {
            module: JsForceModule,
            imports: [JsForceCoreModule.forRootAsync(options)]
        };
    }
}