// Import necessary modules
import React from "@/createElement.js";
import Button from "../components/Button.mjs";
import Navbar from "../components/Navbar.mjs";

// Initialize an empty variables object
let variables = {};

async function fetchJSON(req, res, variables) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  variables.json = json;
  return variables;
}
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
    variables = { ...variables, ...data.props };
    variables.jsLoaded = false;
    state();
  }

  // Define the UI using JSX-like syntax
  let ui = (
    <div>
      <Navbar />
      <header class="p-2 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-wrap">
        <div class="basis-96 grow">
          <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
            Subatomic.js
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
            Subatomic.js is a minimalistic JS framework with PSR and SSR for
            creating dynamic web apps.
          </p>
          <button class="bg-violet-950 text-white rounded px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
            <a href="/tutorial">Tutorial</a>
          </button>
        </div>
        <div class="basis-32 grow flex align-center justify-center">
          <img src="/logo.svg" class="w-1/2 pt-4" alt="Subatomicjs Logo" />
        </div>
      </header>
      <main class="p-2 sm:p-6 md:p-8 lg:p-12 xl:p-16 ">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-semibold">
          SEO, Performance, and Interactivity
        </h1>
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js uses PSR to make sure your dynamic content is indexed by
          search bots and SSR to make data fetching and rendering faster. You
          also get to have interactivity without sacrificing SEO or performance.
        </p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-semibold">
          JSX and Express
        </h1>
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js uses JSX to make it easy to create dynamic UIs along with
          the modifications of using HTML attributes like class. Subatomic.js is
          powered by Express, so you can use all of the features of Express
          along with backend libraries like Passport.js.
        </p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-semibold mb-4">
          Let's see it in action!
        </h1>
        <pre>
          <code class="language-jsx">
            {`<button \n  onclick={() => {variables.cookies++;render();}}\n  class="bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4 mr-4"\n>\n  Component found in Root\n</button>\n<Button variables={variables} />\n<h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-4">\n  Cookies: {variables.cookies}\n</h1>`
              .replaceAll("<", "&lt;")
              .replaceAll(">", "&gt;")}
          </code>
        </pre>
        <button
          class="bg-violet-950 bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
          onClick={() => {
            variables.cookies++;
            render();
          }}
        >
          Component found in Root
        </button>
        <Button variables={variables} />
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 mb-4">
          Cookies: {variables.cookies}
        </h1>
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js makes development easy with JSX, and it also works with
          tailwind and removing unneccessary classes. State management is also
          seamless, you only have to pass the state object around the component
          tree.
        </p>
        <pre>
          <code class="language-jsx">
            {`<input\n  id=\"input\"\n  type=\"text\"\n  oninput={() => {\n    variables.input = this.value;\n  }}\n  value={variables.input}\n  class=\"border-2 border-gray-300 p-2 rounded\"\n/>\n<button\n  onclick={() => {\n    variables.todos.push(input.value);\n    render();\n  }}\n  class=\"bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4\"\n>\n  Add Todo\n</button>\n<button\n  onclick={() => {\n    variables.todos.pop();\n    render();\n  }}\n  class=\"bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4\"\n>\n  Remove Todo\n</button>\n<ul class=\"list-disc list-inside\">\n  {variables.todos.map((a) => {\n    return <li>{a}</li>;\n  })}\n</ul>`
              .replaceAll("<", "&lt;")
              .replaceAll(">", "&gt;")}
          </code>
        </pre>
        <input
          id="input"
          type="text"
          oninput={() => {
            variables.input = this.value;
          }}
          value={variables.input}
          class="border-2 border-gray-300 p-2 rounded"
        />
        <button
          onclick={() => {
            variables.todos.push(input.value);
            render();
          }}
          class="bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
        >
          Add Todo
        </button>
        <button
          onclick={() => {
            variables.todos.pop();
            render();
          }}
          class="bg-violet-950 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
        >
          Remove Todo
        </button>
        <ul class="list-disc list-inside">
          {variables.todos.map((a) => {
            return <li>{a}</li>;
          })}
        </ul>
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js comes with seemless state management with easy and
          familiar syntax. Instead of setting state, you just update the
          variables object and call the render function. This makes it so all
          native data types still work with their native methods.
        </p>
        <pre>
          <code class="language-jsx">
            {`async function fetchJSON(req, res, variables) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  variables.json = json;
  return variables;
}
            `}
          </code>
        </pre>
        <pre>
          <code class="language-jsx">
            {`{Object.keys(variables.json).map((a) => {
  return (
    <p>
      {a}: {variables.json[a]}
    </p>
  );
})}`
              .replaceAll("<", "&lt;")
              .replaceAll(">", "&gt;")}
          </code>
        </pre>
        {Object.keys(variables.json).map((a) => {
          return (
            <p>
              {a}: {variables.json[a]}
            </p>
          );
        })}
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js also comes with middleware functions that run before the
          page is built. This allows you to fetch data from an API or database
          that can end the process early and send a response to the client, or
          change the variables the client receives.
        </p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 font-semibold">
          So what are you waiting for?
        </h1>
        <p class="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          Subatomic.js is the perfect framework for creating dynamic web apps
          with SEO, performance, and interactivity.
        </p>
        <button class="bg-violet-950 text-white rounded px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <a href="/tutorial">Tutorial</a>
        </button>
      </main>

      <footer class="shadow-lg p-4 text-center bg-gray-100">
        &copy Subatomic 2023
      </footer>
    </div>
  );
  // If the document object is defined (i.e., if this code is running in a browser environment)
  if (typeof document !== "undefined") {
    // Call the useEffect function with a function to log a message to the console and a dependencies array

    useEffect(() => {
      console.log("use effect to run side effects");
    }, ["cookies"]);
    // Set the innerHTML of the body element to the UI string
    document.body.innerHTML = parseArray(ui);
    if (typeof Prism === "object") {
      console.log("highlighting");
      Prism.highlightAll();
    }
    // Update the effectVariables object with the current values of the variables
    Object.keys(variables).forEach((a) => {
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
  return <h1>Cookies: {variables.cookies}</h1>;
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
  } catch (e) {}
}

// Define the page object with the render function, state function, init function, and other properties
const page = {
  render: render,
  state: state,
  init: init,
  components: [Cookies, Button, Navbar],
  middleware: [fetchJSON],
  functions: [useEffect, handleChange],
  title: "App created with Subatomic.js",
  description:
    "Subatomic.js is a minimalistic JS framework with PSR and SSR for creating dyanmic web apps.",
  css: [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css",
  ],
  js: ["/prism.js"],
};

// Define a useEffect function
function useEffect(func, deps) {
  // If the document object is defined (i.e., if this code is running in a browser environment)
  if (typeof document !== "undefined") {
    let run = false;
    // Check if any of the dependencies have changed
    deps.forEach((a) => {
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
