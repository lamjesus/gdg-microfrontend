import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10  mx-auto max-w-6xl">
    <Header />
      <h1 className="my-10">Remote</h1>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
