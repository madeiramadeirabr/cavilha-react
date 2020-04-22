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
function Table(_a) {
    var { variants, helpers, hasClassName, children, data, isCompact, isClean, isBorderZero } = _a, props = __rest(_a, ["variants", "helpers", "hasClassName", "children", "data", "isCompact", "isClean", "isBorderZero"]);
    const className = classNames_1.classNames([
        'table',
        isCompact ? 'table--is-compact' : null,
        isClean ? 'table--is-clean' : null,
        isBorderZero ? 'table--has-no-border' : null,
    ], { variants, helpers, hasClassName });
    const { columns, rows } = data;
    const tableRows = [];
    rows.map(function (row) {
        const rowValues = [];
        row.map(function (values, index) {
            rowValues.push(react_1.default.createElement("td", null, values));
        });
        tableRows.push(react_1.default.createElement("tr", null, rowValues));
    });
    return (react_1.default.createElement("div", { className: "helper--has-margin-fix" },
        react_1.default.createElement("table", Object.assign({}, props, { className: className }),
            react_1.default.createElement("thead", null, columns.map((column) => (react_1.default.createElement("th", null, column)))),
            react_1.default.createElement("tbody", null, tableRows))));
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map