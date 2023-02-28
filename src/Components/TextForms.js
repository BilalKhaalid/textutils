import React, { useState } from "react";

export default function TextForms(props) {
  //useState
  const [text, setText] = useState("");
  //Functions
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase!", "success");
  };

  const handledLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase!", "success");
  };
  const handledClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Onchange is triggered!");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "whitesmoke" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#252525" : "white",
              color: props.mode === "dark" ? "whitesmoke" : "dark",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary m-3 " onClick={handledLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger m-1 " onClick={handledClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "whitesmoke" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words & {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} : Minutes Required to read.</p>
        <h3>Preview </h3>
        <p>{text.length > 0 ? text : "Enter Text Above to preview here"}</p>
      </div>
    </>
  );
}
