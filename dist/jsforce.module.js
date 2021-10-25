"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JsForceModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsForceModule = void 0;
const common_1 = require("@nestjs/common");
const jsforce_core_module_1 = require("./jsforce-core.module");
let JsForceModule = JsForceModule_1 = class JsForceModule {
    static forRoot(options) {
        return {
            module: JsForceModule_1,
            imports: [jsforce_core_module_1.JsForceCoreModule.forRoot(options)]
        };
    }
    static forRootAsync(options) {
        return {
            module: JsForceModule_1,
            imports: [jsforce_core_module_1.JsForceCoreModule.forRootAsync(options)]
        };
    }
};
JsForceModule = JsForceModule_1 = __decorate([
    (0, common_1.Module)({})
], JsForceModule);
exports.JsForceModule = JsForceModule;
