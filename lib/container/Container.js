"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.CONTAINER_BLOCK = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
exports.CONTAINER_BLOCK = 'container';
function Container(_a) {
    var { variants, helpers, hasClassName, children, hasBackground } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasBackground"]);
    const className = classNames_1.classNames([exports.CONTAINER_BLOCK], {
        variants,
        helpers,
        hasClassName,
        hasBackground,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map