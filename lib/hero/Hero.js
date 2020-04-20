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
function Hero(_a) {
    var { variants, helpers, hasClassName, children, hasColor, hasSize, isNavbar, isRadiusZero, hasBackground, hasImage } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasSize", "isNavbar", "isRadiusZero", "hasBackground", "hasImage"]);
    const className = classNames_1.classNames([
        'hero',
        hasSize ? `hero--is-${hasSize}` : '',
        isRadiusZero ? `hero--has-no-radius` : '',
        isNavbar ? `hero--has-navbar` : '',
    ], {
        variants, helpers, hasClassName, hasColor, hasBackground
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("div", Object.assign({}, props, { className: className }), children)));
}
exports.Hero = Hero;
//# sourceMappingURL=Hero.js.map