// Import necessary modules
import React from "../../createElement.js";
import Button from "../components/Button.mjs";

// Initialize an empty variables object
let variables = {};

// Define a function to handle changes in the input field
function handleChange(event) {
  event.preventDefault();
  console.log("change");
  // Update the input variable with the new value from the input field
  variables.input = event.target.value;
}

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
  let ui = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
    class: "bg-neutral-800 flex align-center p-4"
  }, /*#__PURE__*/React.createElement("ul", {
    class: "flex  align-center"
  }, /*#__PURE__*/React.createElement("li", {
    class: "text-white hover:bg-neutral-900 px-3 py-2 rounded mr-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    class: "text-white hover:bg-neutral-900 px-3 py-2 rounded"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/docs"
  }, "Docs")))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    class: "mx-auto text-center xl:p-12 lg:p-8 md:p-6 sm:p-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/logo.svg",
    alt: "Subatomc.js Logo",
    lazy: "loading",
    style: "max-width: 10rem",
    class: "mx-auto lg:mt-12 md:mt-8 sm:mt-6 mb-2"
  }), /*#__PURE__*/React.createElement("h1", {
    class: "text-6xl font-bold text-violet-950"
  }, "Subatomic.js"), /*#__PURE__*/React.createElement("p", {
    class: "text-3xl mt-2 text-neutral-200"
  }, "A minimalistic JS framework with PSR and SSR"), /*#__PURE__*/React.createElement("button", {
    class: "bg-violet-950 text-white px-4 py-2 rounded mt-4 "
  }, /*#__PURE__*/React.createElement("a", {
    href: "docs",
    class: "text-xl"
  }, "Get Started")), /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-4xl mt-8"
  }, "Blazing Speeds"), /*#__PURE__*/React.createElement("p", {
    class: "text-2xl mt-4 text-white"
  }, "Subatomic.js has extremely small bundle sizes which can bet under 2kb gzipped."), /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-4xl mt-8"
  }, "interactivity and SEO"), /*#__PURE__*/React.createElement("p", {
    class: "text-2xl mt-4 text-white"
  }, "Subatomic.js uses pre-rendering to make your site SEO friendly while still maintaining interactivity and not hiding interactive content, unlike Next.js and other SSR frameworks."), /*#__PURE__*/React.createElement("div", {
    class: "flex mt-8 flex-wrap justify"
  }, /*#__PURE__*/React.createElement("div", {
    class: "p-4 basis-48 grow overflow-x-scroll"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-2xl"
  }, "Seamless State Management"), /*#__PURE__*/React.createElement("pre", {
    class: "language-jsx bg-neutral-800 text-white text-left overflow-sx-croll p-4 mt-4"
  }, /*#__PURE__*/React.createElement("code", {
    id: "code1",
    class: "language-jsx text-left"
  }))), /*#__PURE__*/React.createElement("div", {
    class: " p-4 basis-48 grow"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-2xl"
  }, "Output:"), /*#__PURE__*/React.createElement("button", {
    class: "bg-violet-950 text-white px-4 py-2 rounded mt-4",
    onclick: () => {
      variables.cookies++;
      render();
    }
  }, "Component found in root"), /*#__PURE__*/React.createElement(Button, {
    variables: variables
  }), /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-xl mt-4"
  }, "You have $", variables.cookies, " Cookies"))), /*#__PURE__*/React.createElement("div", {
    class: "flex flex-wrap mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    class: "basis-48 grow p-4"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-2xl"
  }, "More HTML-like syntax"), /*#__PURE__*/React.createElement("p", {
    class: "text-white text-lg mt-4"
  }, "Subatomic.js uses JSX, but keeps the attributes so class is still class, not className. You can also reference elements with their ID, not using refs.")), /*#__PURE__*/React.createElement("div", {
    class: "basis-48 grow"
  }, /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-2xl"
  }, "Output:"), /*#__PURE__*/React.createElement("button", {
    class: "bg-violet-950 text-white px-4 py-2 rounded mt-4",
    onclick: () => {
      variables.cookies++;
      render();
    }
  }, "Component found in root"), /*#__PURE__*/React.createElement(Button, {
    variables: variables
  }), /*#__PURE__*/React.createElement("h1", {
    class: "text-white text-xl mt-4"
  }, "You have $", variables.cookies, " Cookies"))))));
  // If the document object is defined (i.e., if this code is running in a browser environment)
  if (typeof document !== "undefined") {
    // Call the useEffect function with a function to log a message to the console and a dependencies array
    useEffect(() => {
      console.log("use effect to run side effects");
    }, ["cookies"]);
    // Set the innerHTML of the body element to the UI string
    document.body.innerHTML = parseArray(ui);
    code1.innerText = `<button
  class="bg-violet-950 text-white px-4 py-2 rounded mt-4"
  onclick={() => {
    variables.cookies++;
    render();
  }}
>
  Component found in root
</button>
<Button variables={variables} />
`;
    // Update the effectVariables object with the current values of the variables
    Object.keys(variables).forEach(a => {
      effectVariables[a] = variables[a];
    });
  }
  // If the build argument is true, return the UI string and the variables object
  if (build) {
    return [ui, variables];
  }
}

// Call the state function to initialize the variables
state();

// Define a Cookies component that returns an h1 element with the number of cookies
function Cookies() {
  return `<h1>${variables.cookies}</h1>`;
}

// Define a state function to initialize the variables
function state() {
  variables.cookies = 0;
  variables.todos = [1, 2, 3, 4, 5];
  variables.input = "";
  variables.tset = "test";
}

// Define an init function
async function init() {
  try {
    document.body.classList.add("bg-neutral-900");
  } catch (e) {}
}

// Define the page object with the render function, state function, init function, and other properties
const page = {
  render: render,
  state: state,
  init: init,
  components: [Cookies, Button],
  middleware: [],
  functions: [useEffect, handleChange],
  title: "App created with Subatomic.js",
  description: "Subatomic.js is a minimalistic JS framework with PSR and SSR for creating dyanmic web apps.",
  css: [],
  js: ["https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-javascript.min.js"]
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