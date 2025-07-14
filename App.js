//const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const domEl = React.createElement(
    "div",
    {
      id: "parent",
    },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "container" }, "I am h1 tag"),
      React.createElement("h2", { id: "subheader" }, "I am h2 tag"),
    ])
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(domEl);  