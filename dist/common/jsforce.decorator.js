"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jsforce_contants_1 = require("./jsforce.contants");
function InjectJsForce() {
    return common_1.Inject(jsforce_contants_1.JSFORCE_TOKEN);
}
exports.InjectJsForce = InjectJsForce;
