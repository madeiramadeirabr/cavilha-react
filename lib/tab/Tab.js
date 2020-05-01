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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classNames_1 = require("../core/utils/classNames");
const types_1 = require("./types");
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
    return (react_1.default.createElement(TabProvider, null,
        react_1.default.createElement("div", Object.assign({}, props, { className: className }), children)));
}
exports.Tab = Tab;
function Tabs(_a) {
    var { children, current } = _a, props = __rest(_a, ["children", "current"]);
    const { active, setActive } = useTab();
    if (active === 0) {
        setActive(current);
    }
    return (react_1.default.createElement("div", Object.assign({}, props, { className: types_1.TabElements.tabs }), children));
}
function Item(_a) {
    var { variants, helpers, hasClassName, children, isDisabled, href, index } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isDisabled", "href", "index"]);
    const { active, setActive } = useTab();
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
        react_1.default.createElement("a", Object.assign({}, props, { href: href, className: className, onClick: isDisabled ? null : () => setActive(index) }), children);
    }
    return (react_1.default.createElement("button", Object.assign({}, props, { type: "button", className: className, onClick: isDisabled ? null : () => setActive(index) }), children));
}
function Content(_a) {
    var { children, index } = _a, props = __rest(_a, ["children", "index"]);
    const { active } = useTab();
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
const TabContext = react_1.createContext({});
function TabProvider({ children }) {
    const [active, setActive] = react_1.useState(0);
    return (react_1.default.createElement(TabContext.Provider, { value: { active, setActive } }, children));
}
function useTab() {
    const context = react_1.useContext(TabContext);
    const { active, setActive } = context;
    return { active, setActive };
}
//# sourceMappingURL=Tab.js.map