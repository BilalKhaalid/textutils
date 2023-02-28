import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#202020";
      showAlert("Enabled Dark Mode", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "whitesmoke";
      showAlert("Enabled Light Mode", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
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
  return (
    <div className="app">
      {/* <Navbar title="ForFun" about='Bilal Khalid'/> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      </div>
        <TextForms
          heading="Enter the text for analysis"
          mode={mode}
          showAlert={showAlert}
        />
      <div className="container mt-3">
        <About />
      </div>
    </div>
  );
}

export default App;
