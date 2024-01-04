import React from "../../createElement.js";
export default function Button({
  variables
}) {
  return /*#__PURE__*/React.createElement("button", {
    class: "bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4",
    onclick: () => {
      variables.cookies++;
      render();
    }
  }, "Component from other folder ", variables.cookies);
}