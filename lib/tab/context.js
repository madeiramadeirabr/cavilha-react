"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTab = exports.TabProvider = void 0;
const react_1 = __importStar(require("react"));
const TabContext = react_1.createContext({});
function TabProvider({ children }) {
    const [active, setActive] = react_1.useState(0);
    return (react_1.default.createElement(TabContext.Provider, { value: { active, setActive } }, children));
}
exports.TabProvider = TabProvider;
function useTab() {
    const context = react_1.useContext(TabContext);
    const { active, setActive } = context;
    return { active, setActive };
}
exports.useTab = useTab;
//# sourceMappingURL=context.js.map