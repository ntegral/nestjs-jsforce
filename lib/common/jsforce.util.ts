import { JsForceConfigOptions } from './interfaces';
import { Client } from '../client';

export function createJsForceClient(options: JsForceConfigOptions) {
    const client = new Client(options);
    return client;
}