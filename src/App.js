import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [textMode, settextMode] = useState("Enable Dark Mode")
  const [mode, setMode] = useState("light mode");
  const [darkText, setdarkText] = useState("dark");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light");
      showalert("light mode has been enabled", "success");
      settextMode("Enable Dark Mode");
      setdarkText("dark");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
      document.title = 'TextUtils-Light Mode';  
    }else{
      setMode("dark");
      showalert("dark mode has been enabled", "success");
      settextMode("Enable Light Mode");
      setdarkText("light");
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      document.title = 'TextUtils-Dark Mode';
    }
  }

  const toggleMode1 = () => {
    if(mode === "dark"){
      setMode("light");
      showalert("light mode has been enabled", "success");
      setdarkText("dark");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
      document.title = 'TextUtils-Light Mode';
    }else{
      setMode("dark");
      showalert("dark mode has been enabled", "success");
      setdarkText("light");
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      document.title = 'TextUtils-Dark Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} BtnMode={textMode} dark={darkText} toggleMode1={toggleMode1}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path='/about'>
            <About mode={mode} />
          </Route>
          <Route exact path='/'>
          </Route>
        </Switch> */}
        <TextForm showalert={showalert} heading="Enter text to analyze" mode={mode}/>
      </div>
    {/* </Router>     */}
    </>
  );
}

export default App;
