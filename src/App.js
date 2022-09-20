import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React,{ useState } from 'react';

function App() {
  const[mode,setMode]=useState('light');
   /// whether dark mode is enabled or not 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ="#042743"
      
    }else{
      setMode('light')
      document.body.style.backgroundColor ="white"

    }
  }

  return (
    <>
{/* <Navbar title="TextUtils" aboutText = "AboutTextUtils"/> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-4">
<TextForm heading="Enter the text to analyze below" mode={mode}/>
{/* <About /> */}
</div>
    </>
  );
}

export default App;
