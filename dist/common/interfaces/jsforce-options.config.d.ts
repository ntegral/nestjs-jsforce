import { ConnectionOptions } from "jsforce";
import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
export interface JsForceConfigOptions {
    options: ConnectionOptions;
    username: string;
    password: string;
    security_token?: string;
}
export interface JsForceConfigOptionsFactory {
    createJsForceOptions(): Promise<JsForceConfigOptions> | JsForceConfigOptions;
}
export interface JsForceConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<JsForceConfigOptionsFactory>;
    useExisting?: Type<JsForceConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<JsForceConfigOptions> | JsForceConfigOptions;
}
