"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client");
function createJsForceClient(options) {
    const client = new client_1.Client(options);
    return client;
}
exports.createJsForceClient = createJsForceClient;
