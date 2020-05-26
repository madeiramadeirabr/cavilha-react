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
exports.Tab = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = require("../core/utils/classNames");
const types_1 = require("./types");
const context_1 = require("./context");
function Tab(_a) {
    var { variants, helpers, hasClassName, children, isVertical } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isVertical"]);
    const className = classNames_1.classNames([
        types_1.TabElements.block,
        isVertical ? 'tab--is-vertical' : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    return (react_1.default.createElement(context_1.TabProvider, null,
        react_1.default.createElement("div", Object.assign({}, props, { className: className }), children)));
}
exports.Tab = Tab;
function Tabs(_a) {
    var { children, current } = _a, props = __rest(_a, ["children", "current"]);
    const { active, setActive } = context_1.useTab();
    if (active === 0) {
        setActive(current);
    }
    return (react_1.default.createElement("div", Object.assign({}, props, { className: types_1.TabElements.tabs }), children));
}
function Item(_a) {
    var { variants, helpers, hasClassName, children, isDisabled, href, index } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isDisabled", "href", "index"]);
    const { active, setActive } = context_1.useTab();
    const className = classNames_1.classNames([
        types_1.TabElements.item,
        active === index ? 'tab__item--is-active' : null,
        isDisabled ? 'tab__item--is-disabled' : null,
    ], {
        variants,
        helpers,
        hasClassName,
    });
    if (href) {
        return (react_1.default.createElement("a", Object.assign({}, props, { href: href, className: className, onClick: isDisabled ? null : () => setActive(index) }), children));
    }
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className, onClick: isDisabled ? null : () => setActive(index) }), children));
}
function Content(_a) {
    var { children, index } = _a, props = __rest(_a, ["children", "index"]);
    const { active } = context_1.useTab();
    const className = classNames_1.classNames([
        types_1.TabElements.content,
        active === index
            ? `${types_1.TabElements.content}--is-active`
            : null,
    ], {});
    return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
}
Tab.Item = Item;
Tab.Tabs = Tabs;
Tab.Content = Content;
//# sourceMappingURL=Tab.js.map