import PropTypes from "prop-types";
import TextForm from "./Components/textForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "./App.css";
import Navbarr from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/about";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
      setalert({
        msg: message,
        type: type,
      });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "info");
      document.title = "Text-Utils-MK DARK";
      // setInterval(()=> {
      //   document.title = 'TextUtils  is Amazing';
      //   }, 2000);
      //   setInterval(()=> {
      //   document.title = 'Install TextUtils';
      //   }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "info");
      document.title = "Text-Utils-MK LIGHT";
    }
  };
  return (
    <>
      <Router>
        <Navbarr
          title="Text-Utils-MK"
          mode={mode}
          togglemode={toggle}
          home="Home"
          about="About us"
        />
        <Alert alert={alert} />

          <div className="container , my-3 ">
            <Routes>
            <Route exact path="/about" element=
            { <About />}>
             
            </Route>
            <Route exact path="/"           element = {    <TextForm
                heading="Enter the text you want to analyze"
                mode={mode}
                alert={alert}
                showAlert={showAlert}
              />}>
            </Route>
            </Routes>
          </div>
        
      </Router>
      {/* <Navbarr
          title="Text-Utils-MK"
          mode={mode}
          togglemode={toggle}
          home="Home"
          about="About us"
        />
        <Alert alert={alert} />
        <div className="container , my-3 ">
        <About />
        <TextForm
                heading="Enter the text you want to analyze"
                mode={mode}
                alert={alert}
                howAlert={showAlert}/>
        </div> */}
    </>
  );
}

Navbarr.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  // home: PropTypes.number
  // about: PropTypes.object
};
Navbarr.defaultProps = {
  title: "enter title here",
  about: "About us",
  home: "enter home here",
};
export default App;
