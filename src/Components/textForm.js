import React, { useState } from "react";

//rfc react based components

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");
  const onclickbtn1 = () => {
    //    console.log("uper case clicked")
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success")
  };
  const handleonchange = (xyz) => {
    //    console.log("uper case clicked")
    setText(xyz.target.value);
  };

  const onclickbtn2 = () => {
    //    console.log("uper case clicked")
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success")
  };
  const onclickbtn3 = () => {
    //    console.log("uper case clicked")
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared","success")
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  };

  const handleEtraSpace = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Extra spaces removed","success")
}

  return (
    <>
      <div className="container "  style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h2>{props.heading}</h2>
        <div className=" mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{backgroundColor: props.mode==="dark"? "grey": "white", color:props.mode=== "dark"?"white": "black"}}
          ></textarea>
          <div className="ml-2">
            <button className="btn btn-primary my-2 mx-2" onClick={onclickbtn1}>
              convert to upper case
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={onclickbtn2}>
              convert to Lower case
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={onclickbtn3}>
              Clear Text
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
              Copy Text
            </button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleEtraSpace}>
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3  "  style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p className="b">
          {text.length === 0 ? "0":text.split(" ").length} - words , {text.length} - characters
        </p>
        <p className="b">
          {" "}
          {text.length === 0 ? "0" : 0.008 * text.split(" ").length} - minutes required to read
        </p>
        <h2>Preview</h2>
        <p id="input">{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
