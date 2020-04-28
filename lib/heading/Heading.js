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
const children_1 = require("../core/utils/children");
function H1(_a) {
    var { variants, helpers, hasClassName, isHero, children, hasColor, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "isHero", "children", "hasColor", "withPlaceholder"]);
    const className = classNames_1.classNames([isHero ? 'h1--is-hero' : ''], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    return (react_1.default.createElement("h1", Object.assign({}, props, { className: className }), children));
}
exports.H1 = H1;
function H2(_a) {
    var { variants, helpers, hasClassName, isHero, children, hasColor, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "isHero", "children", "hasColor", "withPlaceholder"]);
    const className = classNames_1.classNames([isHero ? 'h2--is-hero' : ''], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    return (react_1.default.createElement("h2", Object.assign({}, props, { className: className }), children));
}
exports.H2 = H2;
function H3(_a) {
    var { variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasWeight", "withPlaceholder"]);
    const className = classNames_1.classNames([
        '',
        hasWeight
            ? `helper--has-text-${hasWeight}`
            : '',
    ], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    return (react_1.default.createElement("h3", Object.assign({}, props, { className: className }), children));
}
exports.H3 = H3;
function H4(_a) {
    var { variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasWeight", "withPlaceholder"]);
    const className = classNames_1.classNames([
        '',
        hasWeight
            ? `helper--has-text-${hasWeight}`
            : '',
    ], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    return (react_1.default.createElement("h4", Object.assign({}, props, { className: className }), children));
}
exports.H4 = H4;
function H5(_a) {
    var { variants, helpers, hasClassName, children, hasColor, hasWeight, withPlaceholder } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "hasColor", "hasWeight", "withPlaceholder"]);
    const className = classNames_1.classNames([
        '',
        hasWeight
            ? `helper--has-text-${hasWeight}`
            : '',
    ], {
        variants,
        helpers,
        hasClassName,
        hasColor,
        placeholder: withPlaceholder ? children_1.childrenIsEmpty(children) : false,
    });
    return (react_1.default.createElement("h5", Object.assign({}, props, { className: className }), children));
}
exports.H5 = H5;
const Heading = function () {
};
exports.Heading = Heading;
Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
//# sourceMappingURL=Heading.js.map