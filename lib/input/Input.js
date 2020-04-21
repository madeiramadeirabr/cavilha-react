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
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
function Input(_a) {
    var { isDisabled, variants, helpers, hasClassName, children, hasType, isInline } = _a, props = __rest(_a, ["isDisabled", "variants", "helpers", "hasClassName", "children", "hasType", "isInline"]);
    const className = classNames_1.classNames([
        'input',
        isInline ? 'input--is-inline' : 'input--is-block'
    ], {
        variants, helpers, hasClassName
    });
    return (react_1.default.createElement("label", { className: className },
        react_1.default.createElement("div", { className: `input__${hasType}` },
            react_1.default.createElement("input", Object.assign({ type: hasType }, props)),
            react_1.default.createElement("span", { className: "input__marker" }),
            react_1.default.createElement("span", { className: "input__text" }, children))));
}
exports.Input = Input;
;
//# sourceMappingURL=Input.js.map