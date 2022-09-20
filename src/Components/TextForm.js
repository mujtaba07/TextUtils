import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //copy text
  const handleCopy = () => {
    var text = document.getElementById('MyBox')
    text.select();
    navigator.clipboard.writeText(text.value)
  };
  //remove extra spaces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "))
  }

  const firstLetterCapital=()=>{
    const newText =text.charAt(0).toUpperCase() + text.substring(1);
    setText(newText);
  }

  const [text, setText] = useState('');
  
  // text = "hello world" ==> this is the wrong way
  // setText("hello world") ---> this is the way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'#042743':'white'}}
         id="MyBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={firstLetterCapital}>
          First letter capital
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p > {text.split(" ").length-1} words {text.length} characters</p>
    <p > {0.008* text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>

    </div>
          </>
  );
}
