let variables = {};

function render(build, data) {
  console.log(variables);
  if (build) {
    state();
    variables.Test = function (req) {
      if (req) {
        variables.Test = function () {
          return `<h1 class="text-3xl font-bold underline">You are logged in!</h1>`;
        };
      } else {
        variables.Test = function () {
          return `<h1>You are not logged in!</h1>`;
        };
      }
    };
    variables.Test(data.req);
  }
  let ui = [];
  if (typeof document !== "undefined") {
    document.body.innerHTML = `<body>${parseArray(ui)}</body>`;
    Object.keys(variables).forEach((a) => {
      effectVariables[a] = variables[a];
    });
  }
  if (build) {
    console.log("returning", variables);
    return [ui, variables];
  }
}

state();

function state() {}

async function init() {
  try {
  } catch (e) {}
}

const page = {
  render: render,
  state: state,
  init: init,
  components: [],
  middleware: [],
  functions: [useEffect],
  title: "App created with Subatomic.js",
  description:
    "Subatomic.js is a minimalistic JS framework with PSR and SSR for creating dyanmic web apps.",
  css: [],
  js: [],
};

function useEffect(func, deps) {
  if (typeof document !== "undefined") {
    let run = false;
    deps.forEach((a) => {
      if (effectVariables[a] !== variables[a]) {
        run = true;
      }
    });
    if (run) {
      func();
    }
  }
}

export default page;
