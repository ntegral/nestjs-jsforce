"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsForceProviders = void 0;
const common_1 = require("../common");
function createJsForceProviders(options) {
    return {
        provide: common_1.JSFORCE_TOKEN,
        useValue: (0, common_1.createJsForceClient)(options)
    };
}
exports.createJsForceProviders = createJsForceProviders;
