// Import necessary modules
import React from "@/createElement.js";
import Navbar from "@/lib/components/Navbar.mjs";
import useEffect from "@/useEffect.js";

// Initialize an empty variables object
let variables = {};

// Define the render function

function random(req, res, variables) {
  variables.random = <p>Random: {Math.random()}</p>;
  return variables;
}

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
      <main class="p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <h1 class="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold">
          How to <span class="text-violet-950">Subatomic.js</span>
        </h1>
        <p class="mt-4 lg:mt-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          This is your comprohensive guide to using Subatomic.js. This guide
          will cover everything you need to know to create a full-stack app with
          Subatomic.js.
        </p>
        <h2 class="mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          Getting started
        </h2>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          To get started run this command in your terminal:
        </p>
        <pre class="sm:p-2 md:p-4 mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gray-300 p-4 rounded">
          npx create-subatomic-app@latest
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Then you can choose the name and whether or not you want to use
          Typescript and/or Tailwind. (Using Typescript can be more difficult
          due to Typescript not understand Subatomic.js too well and underlining
          functions that it doesn't think exist.)
        </p>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Once you have created your app, open the new folder and run:
        </p>
        <pre class="sm:p-2 md:p-4 mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl bg-gray-300 p-4 rounded">
          npm run start
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          This will start the server and open your app in your browser. You can
          now edit your app and see the changes after saving and refreshing the
          tab. You will want to first open page.js (or page.tsx, you can
          actually use .js, .jsx, .tsx, or .ts) and edit the title and
          description in the exports.
        </p>
        <pre>
          <code class="language-javascript">
            {`const page = {
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
};`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          As you can tell there are a lot of options for the page object. The
          render, state, and init functions are important and necessary. Editing
          them is optional, but it is required that they are exported. We'll go
          over the other options later.
        </p>
        <h2 class="mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          Writing the UI
        </h2>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Inside of the render function you will write the UI. The UI is written
          in JSX, but with the slight modification of using vanilla HTML
          attributes. For example, instead of using className, you will use
          class.
        </p>
        <pre>
          <code class="language-jsx">
            {`let ui = (
  <div>
    <h1 class="text-4xl">Hello World!</h1>
  </div>
);`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          You'd obviously want functionality, and Subatomic.js makes this very
          intuitive. Let's create a cookie clicker example.
        </p>
        <pre>
          <code class="language-jsx">
            {`let ui = (
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
    <p class="mt-4">You have {variables.cookies} cookies</p>
  </div>
);`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          This doesn't work yet, because we haven't defined what cookies is. You
          can do this in the state function, or define it when clicking instead.
        </p>
        <pre class="language-javascript">
          <code class="language-jsx">
            {`function state() {
  variables.cookies = 0;
}`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl  mb-4 lg:mb-6">
          Or:
        </p>
        <pre class="language-jsx">
          <code>
            {`onclick={() => {
  if (!variables.cookies) {
    variables.cookies = 0;
  }
  variables.cookies++;
  render();
}}`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Either way you have a working cookie clicker! That wasn't too hard
          wasn't it?
        </p>
        <h1 class="text-4xl mt-4 lg:mt-6">Cookie Clicker</h1>

        <button
          class="bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4"
          onclick={() => {
            variables.cookies++;
            render();
          }}
        >
          Click me!
        </button>
        <p class="mt-4">You have {variables.cookies} cookies</p>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl  mb-4 lg:mb-6">
          You can also add side effects easily with syntax similar to React's.
          You need to define them in the render function and define them before
          the effecdt variables are defined.
        </p>
        <pre class="language-jsx">
          <code class="language-jsx">{`useEffect(() => {
  alert("Cookies Changed");
}, ["cookies"])`}</code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl  mb-4 lg:mb-6">
          As you can see everything is pretty intuitive and similar to React,
          but without the awful bundle sizes. You can also use components from
          other folders. Let's create a button component in a new file called
          Button.tsx / Button.jsx.
        </p>
        <pre class="language-jsx">
          <code class="language-jsx">
            {`import React from "@/createElement.js";

export default function Button({ variables }) {
  return (
    <button
      class="bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4"
      onclick={() => {
        variables.cookies++;
        render();
      }}
    >
      Component from other folder {variables.cookies}
    </button>
  );
}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl  mb-4 lg:mb-6">
          Then you can import it into page.tsx / page.jsx and use it.
        </p>
        <pre class="language-jsx">
          <code class="language-jsx">
            {`import Button from "@/lib/components/Button.mjs";"`};
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl  mb-4 lg:mb-6">
          Importing is slightly weird, because you have to reference the
          compiled version which is found in lib not app, and always ends with
          the .mjs extension.
        </p>
        <pre class="language-jsx">
          <code class="language-jsx">
            {`<Button variables={variables} />`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
            ;
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Passing variables to the component is optional, but if you want to use
          Typescript it's better to probably pass it in so you don't get more
          red squiggly lines. So you could technically have the function not
          even have variables as an argument and not pass them in and have it
          still work.
        </p>
        <pre class="language-jsx">
          <code class="language-jsx">
            {`import React from "@/createElement.js";

export default function Button() {
  return (
    <button
      class="bg-violet-950  text-white font-bold py-2 px-4 rounded mt-4 mr-4"
      onclick={() => {
        variables.cookies++;
        render();
      }}
    >
      Component from other folder {variables.cookies}
    </button>
  );
}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        <pre class="language-jsx">
          <code class="language-jsx">
            {`<Button />`.replaceAll(/</g, "&lt;").replaceAll(/>/g, "&gt;")};
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Unfortunately, for each component and function you make you have to
          make sure it's included in the page object that way Subatomic.js knows
          to send it to the client and other intracasies.
        </p>
        <pre>
          <code class="language-javascript">
            {`const page = {
  render: render, //necessary
  state: state, //necessary
  init: init, //necessary
  components: [], //put imported components here
  middleware: [], //optional
  functions: [useEffect], //put functions you created here
  title: "My Cool App", //necessary
  description:
    "My app is very cool, come check it out!", //necessary
  css: [], //optional
  js: [], //optional
};`}
          </code>
        </pre>
        <h2 class="mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          Data fetching
        </h2>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Data fetching is very simple with Subatomic.js. You can either have
          the data be fetched on the server or the client. If you want to fetch
          the data on the server, define a function and export it in the
          middleware array found in page.
        </p>
        <pre>
          <code class="language-javascript">{`async function fetchData(req, res, variables) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  variables.json = json;
  return variables;
}`}</code>
        </pre>
        <pre>
          <code class="language-javascript">
            {`const page = {
  // other stuffs
  middleware: [fetchData],
};`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Now I can reference this data in the UI.
        </p>
        <pre>
          <code class="language-jsx">
            {`{Object.keys(variables.json).map((a) => {
  return (
    <p>
      {a}: {variables.json[a]}
    </p>
  );
})}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        {Object.keys(variables.json).map((a) => {
          return (
            <p>
              {a}: {variables.json[a]}
            </p>
          );
        })}
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          If you want to fetch data on the client, you can fetch it in the init
          function which will happen on the client.
        </p>
        <pre>
          <code class="language-javascript">{`async function init() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    variables.clientJSON = json;
    render();
  }
  catch (e) {}
}`}</code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Now I can reference this data in the UI.
        </p>
        <pre>
          <code class="language-jsx">
            {`{Object.keys(variables.clientJSON).map((a) => {
  return (
    <p>
      {a}: {variables.clientJSON[a]}
    </p>
  );
})}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        {variables.clientJSON &&
          Object.keys(variables.clientJSON).map((a) => {
            return (
              <p>
                {a}: {variables.clientJSON[a]}
              </p>
            );
          })}
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          You can also use the fetch function in the useEffect function.
        </p>
        <pre>
          <code class="language-javascript">
            {`useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((json) => {
      variables.effectJSON = json;
      render();
    })
    .catch((e) => {});
}, [])`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          Now I can reference this data in the UI.
        </p>
        <pre>
          <code class="language-jsx">
            {`{variables.effectJSON && Object.keys(variables.effectJSON).map((a) => {
  return (
    <p>
      {a}: {variables.json[a]}
    </p>
  );
})}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        {variables.effectJSON &&
          Object.keys(variables.effectJSON).map((a) => {
            return (
              <p>
                {a}: {variables.effectJSON[a]}
              </p>
            );
          })}
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          I can also directly add a component as a property of variables in
          middleware and then reference it in the UI. This way I can have a
          conditional server component, incase I want to hide information to
          certain users.
        </p>
        <pre>
          <code class="language-jsx">
            {`function random(req, res, variables) {
    variables.random = <p>Random: {Math.random()}</p>
    return variables;
}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        <pre>
          <code class="language-javascript">
            {`const page = {
  // other stuffs
  middleware: [random],
};`}
          </code>
        </pre>
        <pre>
          <code class="language-jsx">
            {`{variables.random}`
              .replaceAll(/</g, "&lt;")
              .replaceAll(/>/g, "&gt;")}
          </code>
        </pre>
        {variables.random}
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-6">
          As you can see, Subatomic.js is pretty intuitive and very similar to
          React. It gets the SEO, SSR, and speed benefits that React doesn't
          have and makes it a good full-stack framework.
        </p>
        <h2 class="mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          APIs
        </h2>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Subatomic.js is powered by Express.js, so you can use any Express.js
          apis you want. Just type in your app.* code in side of the api.js
          file.
        </p>
        <pre class="language-javascript">
          <code class="language-javascript">
            {`function initApis(app) {
  app.get("/api", (req, res) => {
    res.send("APIs");
  });
  // other apis
}

module.exports = initApis;`}
          </code>
        </pre>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Now you can access this api at /api. You could use this API however
          you'd like and it was as simple as it had to be to create.
        </p>
        <h2 class="mt-8 lg:mt-10 text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
          User authentication
        </h2>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          Subatomic.js uses passport.js for user authentication. You can
          configure it in the auth.js file.
        </p>
        <p class="mt-4 lg:mt-6 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
          As great as Subatomic.js sounds, it's not perfect. We'd love your
          support and feel free to contribute to the project on{" "}
          <a
            href="https://github.com/TheLazyCodernothacker/Subatomic.js"
            class="text-red-500"
          >
            GitHub
          </a>
          .
        </p>
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
      alert("Cookies Changed");
    }, ["cookies"]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((json) => {
          variables.effectJSON = json;
          render();
        })
        .catch((e) => {});
    }, []);
    // Set the innerHTML of the body element to the UI string
    document.body.innerHTML = parseArray(ui);
    // Update the effectVariables object with the current values of the variables
    Object.keys(variables).forEach((a) => {
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
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    variables.clientJSON = json;
    render();
  } catch (e) {}
}

async function fetchData(req, res, variables) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  variables.json = json;
  return variables;
}

// Define the page object with the render function, state function, init function, and other properties
const page = {
  render: render,
  state: state,
  init: init,
  components: [Navbar],
  middleware: [fetchData, random],
  functions: [useEffect],
  title: "App created with Subatomic.js",
  description:
    "Subatomic.js is a minimalistic JS framework with PSR and SSR for creating dyanmic web apps.",
  css: [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css",
  ],
  js: ["/prism.js"],
};

// Define a useEffect function

// Export the page object
export default page;
