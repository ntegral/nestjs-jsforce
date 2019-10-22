import { JsForceConfigOptions } from '../common/interfaces';
import { JSFORCE_TOKEN, createJsForceClient } from '../common';

export function createJsForceProviders(options: JsForceConfigOptions) {
    return {
        provide: JSFORCE_TOKEN,
        useValue: createJsForceClient(options)
    }
}