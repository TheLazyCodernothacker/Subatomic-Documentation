import React from "../../createElement.js";
export default function Navbar() {
  return /*#__PURE__*/React.createElement("nav", {
    class: "p-4 shadow-lg"
  }, /*#__PURE__*/React.createElement("ul", {
    class: "flex space-x-4"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/",
    class: "hover:bg-gray-100 px-4 py-3 rounded"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/tutorial",
    class: "hover:bg-gray-100 px-4 py-3 rounded"
  }, "Tutorial"))));
}