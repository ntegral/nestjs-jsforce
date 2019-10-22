import { DynamicModule } from '@nestjs/common';
import { JsForceConfigAsyncOptions, JsForceConfigOptions } from './common/interfaces';
export declare class JsForceModule {
    static forRoot(options: JsForceConfigOptions): DynamicModule;
    static forRootAsync(options: JsForceConfigAsyncOptions): DynamicModule;
}
