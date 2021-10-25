"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsForceClient = void 0;
const client_1 = require("../client");
function createJsForceClient(options) {
    const client = new client_1.Client(options);
    return client;
}
exports.createJsForceClient = createJsForceClient;
