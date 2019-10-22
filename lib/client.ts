import { Connection, UserInfo } from 'jsforce';
import { JsForceConfigOptions } from './common/interfaces';

export class Client {
    conn!: Connection;
    initialization!: Promise<any>;

    constructor(config: JsForceConfigOptions) {
        this.conn = new Connection(config.options);

        this.initialization = this.init(config.username, config.password, config.security_token);
    }

    async init(username:string, password: string, security_token?:string, callback?: (err: Error, result: UserInfo) => {}) {
        if (security_token) {
            password += security_token;
        }
        await this.conn.login(username,password).catch(
            (err) => {
                return err;
            }
        );
    }

    async logout(revoke?:boolean, callback?: (err:Error, res: undefined) => {}){
        return await this.conn.logout();
    }
}