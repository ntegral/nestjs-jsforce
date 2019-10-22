"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function createJsForceProviders(options) {
    return {
        provide: common_1.JSFORCE_TOKEN,
        useValue: common_1.createJsForceClient(options)
    };
}
exports.createJsForceProviders = createJsForceProviders;
