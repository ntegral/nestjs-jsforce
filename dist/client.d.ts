import * as jsforce from 'jsforce';
import { JsForceConfigOptions } from './common/interfaces';
export declare class Client {
    conn: jsforce.Connection;
    initialization: Promise<any>;
    constructor(config: JsForceConfigOptions);
    init(username: string, password: string, security_token?: string, callback?: (err: Error, result: jsforce.UserInfo) => {}): Promise<void>;
    query(): void;
}
