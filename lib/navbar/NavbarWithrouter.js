"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = require("./Navbar");
const classNames_1 = require("../core/utils/classNames");
const ButtonLink = ({ children, to, }) => {
    const className = classNames_1.classNames([Navbar_1.NavbarElements.item], {});
    return (react_1.default.createElement(react_router_dom_1.NavLink, { to: to, className: className, activeClassName: "navbar__item--is-active" }, children));
};
const NavbarItemWithRouter = react_router_1.withRouter(ButtonLink);
exports.NavbarItemWithRouter = NavbarItemWithRouter;
//# sourceMappingURL=NavbarWithrouter.js.map