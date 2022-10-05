import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [btn, setBtn] = useState("btn btn-primary");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  /// whether dark mode is enabled or not
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
//       setInterval(() => {
//       document.title = 'TextUtils - Dark Mode'
//       },2000);
    //   setInterval(() => {                                ------- to enable a blinker in the title
    //   document.title = 'TextUtils - download now'
    //    },1200);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  // function redMode() {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#dc3545";
  //     // showAlert("Red mode has been enabled","success")
  //     setBtn("btn btn-light");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled","success")
  //     setBtn("btn btn-primary");
  //   }
  // }
  // function blueMode() {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#0d6efd";
  //     // showAlert("Red mode has been enabled","success")
  //     setBtn("btn btn-light");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled","success")
  //     setBtn("btn btn-primary");
  //   }
  // }

  // function greenMode() {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#20c997";
  //     // showAlert("Green mode has been enabled","success")
  //     setBtn("btn btn-light");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled","success")
  //     setBtn("btn btn-primary");
  //   }
  // }
  // function yellowMode() {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#ffc107";
  //     // showAlert("Green mode has been enabled","success")
  //     setBtn("btn btn-light");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     // showAlert("Light mode has been enabled","success")
  //     setBtn("btn btn-primary");
  //   }
  // }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "AboutTextUtils"/> */}
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        // blueMode={blueMode}
        // redMode={redMode}
        // greenMode={greenMode}
        // yellowMode={yellowMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About /> */}
          {/* </Route> */}

          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} button={btn} />
          {/* </Route> */}
      {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
