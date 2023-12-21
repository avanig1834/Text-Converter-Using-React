import React, { useState } from 'react'
import './TextForm.css'
// Hooks let us use state and other React features without writing a class.

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("the given text is capitalised", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("the given text is in lower case", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const replace_text = () => {
    // let newText = text.replace("the", "A");
    // setText(newText);
    let existing_text = prompt("enter text to be replaced");
    let new_text = prompt("enter word");
    setText(text.replace(existing_text, new_text));
    // props.showalert("text has been replaced");
  };
  // text cannot be updated like a variable it needs function to be updated
  const [text, setText] = useState('');
  // const [old_word, new_word] = useState('');


  const handlecopy = () => {
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          {/* <label htmlFor="Mybox" className="form-label">{props.heading}</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'dark':'light'}} id="Mybox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={replace_text}>replace text</button> 
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy text</button> 
        
      </div>

      <div className="container1 my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <div className={`form-switch text-${props.dark}`}>
          <h3>Your text summary</h3>
        </div>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
 
    </>
  )
}
