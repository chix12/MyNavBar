import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const myItemList = [
  { link: "#", title: "AboutUs", isActive: true },
  { link: "#", title: "Career", isActive: false },
  { link: "#", title: "Contact", isActive: false },
  { link: "#", title: "For Buisness", isActive: false }
];

const NavItem = props => {
  return (
    <a
      className="my-item"
      href={props.link}
      style={{ color: props.isActive ? "#3fb59b" : "black" }}
    >
      <span> {props.text} </span>
      <span> {props.isActive} </span>
    </a>
  );
};

const NavMenu = props => {
  return props.itemList.map((el, i) => (
    <NavItem key={i} link={el.link} text={el.title} isActive={el.isActive} />
  ));
};

const App = () => {
  return (
    <div className="App">
      <NavMenu itemList={myItemList} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
