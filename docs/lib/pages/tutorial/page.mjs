// Import necessary modules
import React from "../../../createElement.js";
import Navbar from "../../../lib/components/Navbar.mjs";

// Initialize an empty variables object
let variables = {};

// Define the render function
function render(build, data) {
  // If the build argument is true, call the state function to initialize the variables
  if (build) {
    variables = {
      ...variables,
      ...data.props
    };
    variables.jsLoaded = false;
    state();
  }

  // Define the UI using JSX-like syntax
  let ui = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    class: "p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "text-4xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold"
  }, "How to ", /*#__PURE__*/React.createElement("span", {
    class: "text-violet-950"
  }, "Subatomic.js")), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
  }, "This is your comprohensive guide to using Subatomic.js. This guide will cover everything you need to know to create a full-stack app with Subatomic.js."), /*#__PURE__*/React.createElement("h2", {
    class: "mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold"
  }, "Getting started"), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "To get started run this command in your terminal:"), /*#__PURE__*/React.createElement("pre", {
    class: "sm:p-2 md:p-4 mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gray-400 p-4 rounded"
  }, "npx create-subatomic-app@latest"), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "Then you can choose the name and whether or not you want to use Typescript and/or Tailwind. (Using Typescript can be more difficult due to Typescript not understand Subatomic.js too well and underlining functions that it doesn't think exist.)"), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "Once you have created your app, open the new folder and run:"), /*#__PURE__*/React.createElement("pre", {
    class: "sm:p-2 md:p-4 mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gray-400 p-4 rounded"
  }, "npm run start"), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "This will start the server and open your app in your browser. You can now edit your app and see the changes after saving and refreshing the tab. You will want to first open page.js (or page.tsx) and edit the title and description in the exports."), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    class: "language-javascript"
  }, `const page = {
  render: render, //necessary
  state: state, //necessary
  init: init, //necessary
  components: [], //optional
  middleware: [], //optional
  functions: [useEffect], //optional
  title: "My Cool App", //necessary
  description:
    "My app is very cool, come check it out!", //necessary
  css: [], //optional
  js: [], //optional
};`)), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "As you can tell there are a lot of options for the page object. The render, state, and init functions are important and necessary. Editing them is optional, but it is required that they are exported. We'll go over the other options later."), /*#__PURE__*/React.createElement("h2", {
    class: "mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold"
  }, "Writing the UI"), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "Inside of the render function you will write the UI. The UI is written in JSX, but with the slight modification of using vanilla HTML attributes. For example, instead of using className, you will use class."), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    class: "language-jsx"
  }, `let ui = (
  <div>
    <h1 class="text-4xl">Hello World!</h1>
  </div>
);`.replaceAll(/</g, "&lt;").replaceAll(/>/g, "&gt;"))), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "You'd obviously want functionality, and Subatomic.js makes this very intuitive. Let's create a cookie clicker example."), /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", {
    class: "language-jsx"
  }, `let ui = (
  <div>
    <h1 class="text-4xl">Cookie Clicker</h1>
    <button
      class="bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4"
      onclick={() => {
        variables.cookies++;
        render();
      }}
    >
      Click me!
    </button>
    <p>You have {variables.cookies} cookies</p>
  </div>
);`.replaceAll(/</g, "&lt;").replaceAll(/>/g, "&gt;"))), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "This doesn't work yet, because we haven't defined what cookies is. You can do this in the state function, or define it when clicking instead."), /*#__PURE__*/React.createElement("pre", {
    class: "language-javascript"
  }, /*#__PURE__*/React.createElement("code", {
    class: "language-jsx"
  }, `function state() {
  variables.cookies = 0;
}`)), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "Or:"), /*#__PURE__*/React.createElement("pre", {
    class: "language-jsx"
  }, /*#__PURE__*/React.createElement("code", null, `onclick={() => {
  if (!variables.cookies) {
    variables.cookies = 0;
  }
  variables.cookies++;
  render();
}}`)), /*#__PURE__*/React.createElement("p", {
    class: "mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl"
  }, "Either way you have a working cookie clicker! That wasn't too hard wasn't it?"), /*#__PURE__*/React.createElement("h1", {
    class: "text-4xl mt-4 lg:mt-6"
  }, "Cookie Clicker"), /*#__PURE__*/React.createElement("button", {
    class: "bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4",
    onclick: () => {
      variables.cookies++;
      render();
    }
  }, "Click me!"), /*#__PURE__*/React.createElement("p", null, "You have ", variables.cookies, " cookies")));
  // If the document object is defined (i.e., if this code is running in a browser environment)
  if (typeof document !== "undefined") {
    // Call the useEffect function with a function to log a message to the console and a dependencies array
    // Set the innerHTML of the body element to the UI string
    document.body.innerHTML = parseArray(ui);
    // Update the effectVariables object with the current values of the variables
    Object.keys(variables).forEach(a => {
      effectVariables[a] = variables[a];
    });
    if (typeof Prism === "object") {
      console.log("highlighting");
      Prism.highlightAll();
    }
  }
  // If the build argument is true, return the UI string and the variables object
  if (build) {
    return [ui, variables];
  }
}

// Define a state function to initialize the variables
function state() {
  variables.cookies = 0;
}

// Define an init function
async function init() {
  try {} catch (e) {}
}

// Define the page object with the render function, state function, init function, and other properties
const page = {
  render: render,
  state: state,
  init: init,
  components: [Navbar],
  middleware: [],
  functions: [useEffect],
  title: "App created with Subatomic.js",
  description: "Subatomic.js is a minimalistic JS framework with PSR and SSR for creating dyanmic web apps.",
  css: ["https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css"],
  js: ["/prism.js"]
};

// Define a useEffect function
function useEffect(func, deps) {
  // If the document object is defined (i.e., if this code is running in a browser environment)
  if (typeof document !== "undefined") {
    let run = false;
    // Check if any of the dependencies have changed
    deps.forEach(a => {
      if (effectVariables[a] !== variables[a]) {
        run = true;
      }
    });
    // If any of the dependencies have changed, call the function
    if (run) {
      func();
    }
  }
}

// Export the page object
export default page;