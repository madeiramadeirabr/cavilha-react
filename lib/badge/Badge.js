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
function Badge(_a) {
    var { variants, helpers, hasClassName, children, hasColor, isPill, isFloating, isOutline, href, hasFloat } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "isPill", "isFloating", "isOutline", "href", "hasFloat"]);
    const className = classNames_1.classNames([
        'badge',
        hasColor ? `badge--is-${hasColor}` : null,
        isPill ? 'badge--is-pill' : null,
        isFloating ? 'badge--is-floating' : null,
        isOutline ? 'badge--is-outline' : null,
        hasFloat ? `helper--is-on-${hasFloat}` : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    if (href) {
        return (react_1.default.createElement("a", Object.assign({}, props, { className: className }), children));
    }
    return (react_1.default.createElement("span", Object.assign({}, props, { className: className }), children));
}
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map