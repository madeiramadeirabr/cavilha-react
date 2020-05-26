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
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
const children_1 = require("../core/utils/children");
const BLOCK = 'image';
function Image(_a) {
    var { variants, helpers, hasClassName, hasBackground, src, title, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "hasBackground", "src", "title", "withPlaceholder"]);
    const className = classNames_1.classNames([BLOCK], {
        variants,
        helpers,
        hasClassName,
        hasBackground,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(src) : false,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }),
        react_1.default.createElement("img", { src: src, alt: title || '' })));
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map