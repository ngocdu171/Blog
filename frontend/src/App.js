import React from "react";
import Add from "./components/Add";
import Home from "./components/Home";
import News from "./components/News/News";
import "./Styles.css";

const App = () => {
  return (
    <div>
      <Home />
      <News />
      <Add />
    </div>
  );
};

export default App;
