import { ConnectionOptions } from "jsforce";
export interface JsForceConfigOptions {
    options: ConnectionOptions;
    username: string;
    password: string;
    security_token?: string;
}
