"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const jsforce_1 = require("jsforce");
class Client {
    constructor(config) {
        this.conn = new jsforce_1.Connection(config.options);
        this.initialization = this.init(config.username, config.password, config.security_token);
    }
    init(username, password, security_token, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (security_token) {
                password += security_token;
            }
            yield this.conn.login(username, password).catch((err) => {
                return err;
            });
        });
    }
    logout(revoke, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conn.logout();
        });
    }
}
exports.Client = Client;
