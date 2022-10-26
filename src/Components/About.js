import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });
 const myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor:props.mode === 'dark'?'rgb(36 74 104 )':'white'
 }


  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 className="my-3">About Me</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Github</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               <a href="https://github.com/mujtaba07?tab=repositories">Github</a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> LinkedIn</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <a href="https://www.linkedin.com/in/mujtaba-sayyed-633522216/">LinkedIn</a>
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >

        <strong>Resume</strong>
             </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
               <a href=""> </a> 
            </div>
          </div>
        </div> */}
      </div>
      
    </div>
  );
}
