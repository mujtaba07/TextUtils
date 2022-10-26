import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    if(text===''){
    props.showAlert("Textarea is empty","warning")
    }else{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
    }
  };
  
  const handleLoClick = () => {
    if(text === ''){
    props.showAlert("Textarea is empty","warning")
    }else{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
    }
  };

  const handleClearClick = () => {
    if(text===''){
    props.showAlert("Textarea is Empty","warning")
    }else{
      const newText = "";
      setText(newText);
      props.showAlert("cleared","success")
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //copy text
  const handleCopy = () => {
      var text = document.getElementById('MyBox')
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard","success") 
  
  };
  //remove extra spaces
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/); 
     setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
  }

  const firstLetterCapital=()=>{
    const newText =text.charAt(0).toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert("Converted first letter capital","success")

  }

  const [text, setText] = useState('');
  
  // text = "hello world" ==> this is the wrong way
  // setText("hello world") ---> this is the way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea  className="form-control" value={text} onChange={handleOnChange} 
        style={{ backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
         id="MyBox" rows="8"></textarea>
        <button disabled={text.length===0} className={`btn ${props.button} my-3 mx-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}  className={`btn ${props.button} my-3 mx-2`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className={`btn ${props.button} my-3 mx-2`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0}  className={`btn ${props.button} my-3 mx-2`} onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0}  className={`btn ${props.button} my-3 mx-2`} onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0}  className={`btn ${props.button} my-3 mx-2`} onClick={firstLetterCapital}>
          First letter capital
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p > {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    <p > {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to Preview'}</p>

    </div>
          </>
  );
}
