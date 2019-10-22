import { JsForceConfigOptions } from '../common/interfaces';
export declare function createJsForceProviders(options: JsForceConfigOptions): {
    provide: string;
    useValue: import("../client").Client;
};
