import { DynamicModule } from '@nestjs/common';
import { JsForceConfigAsyncOptions, JsForceConfigOptions } from './common/interfaces';
export declare class JsForceCoreModule {
    static forRoot(options: JsForceConfigOptions): DynamicModule;
    static forRootAsync(options: JsForceConfigAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
