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
function Alert(_a) {
    var { variants, helpers, hasClassName, children, hasColor, hasIcon, onClose } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasIcon", "onClose"]);
    const className = classNames_1.classNames([
        'alert',
        hasColor ? `alert--is-${hasColor}` : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }),
        hasIcon ? react_1.default.createElement("div", { className: "alert__icon" }, hasIcon) : null,
        react_1.default.createElement("div", { className: "alert__content" }, children),
        react_1.default.createElement("button", { onClick: onClose, className: "alert__close", type: "button", dangerouslySetInnerHTML: { __html: '&times;' } })));
}
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map