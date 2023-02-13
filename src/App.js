import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

// Pages
import { Home } from "./Pages";

// Style SASS
import './scss/main.scss';

// Components
import { Sidebar } from "./Components";

const App = () => {
  return (
    <div className="main-div">
      <div className="side">
        <Sidebar/>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
