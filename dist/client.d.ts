import { Connection, UserInfo } from 'jsforce';
import { JsForceConfigOptions } from './common/interfaces';
export declare class Client {
    conn: Connection;
    initialization: Promise<any>;
    constructor(config: JsForceConfigOptions);
    init(username: string, password: string, security_token?: string, callback?: (err: Error, result: UserInfo) => {}): Promise<void>;
    logout(revoke?: boolean, callback?: (err: Error, res: undefined) => {}): Promise<void>;
}
