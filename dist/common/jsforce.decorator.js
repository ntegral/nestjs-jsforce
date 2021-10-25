"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectJsForce = void 0;
const common_1 = require("@nestjs/common");
const jsforce_contants_1 = require("./jsforce.contants");
function InjectJsForce() {
    return (0, common_1.Inject)(jsforce_contants_1.JSFORCE_TOKEN);
}
exports.InjectJsForce = InjectJsForce;
