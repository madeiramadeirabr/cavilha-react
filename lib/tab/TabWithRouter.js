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
const react_router_dom_1 = require("react-router-dom");
const types_1 = require("./types");
function TabWithRouter(_a) {
    var { variants, helpers, hasClassName, children, isVertical } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isVertical"]);
    const className = classNames_1.classNames([
        types_1.TabElements.block,
        isVertical ? 'tab--is-vertical' : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
exports.TabWithRouter = TabWithRouter;
function Tabs(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (react_1.default.createElement("div", Object.assign({}, props, { className: types_1.TabElements.tabs }), children));
}
function Item({ variants, helpers, hasClassName, children, isDisabled, isActive, to, }) {
    const className = classNames_1.classNames([
        types_1.TabElements.item,
        isActive ? 'tab__item--is-active' : null,
        isDisabled ? 'tab__item--is-disabled' : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    return (react_1.default.createElement(react_router_dom_1.Link, { to: to, className: className }, children));
}
TabWithRouter.Item = Item;
TabWithRouter.Tabs = Tabs;
//# sourceMappingURL=TabWithRouter.js.map