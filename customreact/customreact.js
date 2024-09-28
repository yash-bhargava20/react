const mainContainer = document.getElementById("root");
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "blank",
  },
  children: "click me",
};

const customRender = (reactElement, maincontainer) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const x in reactElement.props) {
    if (x == "children") continue;
    domElement.setAttribute(x, reactElement.props[x]);
  }
  maincontainer.appendChild(domElement);
};
customRender(reactElement, mainContainer);
