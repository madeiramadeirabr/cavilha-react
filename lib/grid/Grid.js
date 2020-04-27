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
var GridElements;
(function (GridElements) {
    GridElements["row"] = "grid__row";
    GridElements["columns"] = "grid__columns";
    GridElements["column"] = "grid__column";
})(GridElements || (GridElements = {}));
function Row(_a) {
    var { variants, helpers, hasClassName, children, isReverse, isMarginFix } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "isReverse", "isMarginFix"]);
    const className = classNames_1.classNames([GridElements.row, isReverse ? 'grid__row--is-reverse' : ''], {
        variants,
        helpers,
        hasClassName,
    });
    function RowComponent() {
        return (react_1.default.createElement("div", Object.assign({}, props, { className: className }), children));
    }
    if (isMarginFix) {
        return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
            react_1.default.createElement(RowComponent, null)));
    }
    return react_1.default.createElement(RowComponent, null);
}
exports.Row = Row;
function Column(_a) {
    var { variants, helpers, hasClassName, children, mobile, tablet, desktop, hasSize } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "mobile", "tablet", "desktop", "hasSize"]);
    const sizes = [];
    if (mobile)
        sizes.push(`${GridElements.column}--is-${mobile}-mobile`);
    if (tablet)
        sizes.push(`${GridElements.column}--is-${tablet}-tablet`);
    if (desktop)
        sizes.push(`${GridElements.column}--is-${desktop}`);
    if (hasSize)
        sizes.push(`${GridElements.column}--is-${hasSize}`);
    return (react_1.default.createElement("div", Object.assign({}, props, { className: classNames_1.classNames([GridElements.column, ...sizes], {
            variants,
            helpers,
            hasClassName,
        }) }), children || ''));
}
exports.Column = Column;
//# sourceMappingURL=Grid.js.map