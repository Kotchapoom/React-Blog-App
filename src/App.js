import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";
import Deatails from "./components/Details";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={"App " + theme}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/info" element={<Navigate to="/about" />}></Route>
          <Route path="/blog/:id" element={<Deatails />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
