import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar";
import Crousals from "./Components/crousals";
import TextConverter from "./Components/TextConverter";
import Footer from './Components/Footer'
import { useState } from 'react';
function App() {
  const [isDark,setIsDark] = useState(false)
  const [darkWorld,setDarkWorld] = useState("Enter In Dark World");

  const toggleMode = ()=>{
    if(isDark){
      setIsDark(false)
      setDarkWorld("Enter in Dark World")
    }
    else{
      setDarkWorld("Out From Dark World")
      setIsDark(true)
    }
  }
  return (
    <>
    <Navbar title="TextAnalyzer"  isDark={isDark} darkWorld={darkWorld} toggle={toggleMode}/>
    <TextConverter title="Enter Text To Analyze.." isDark={isDark}/>
    <Footer title="TextAnalyzer" isDark={isDark}/>

    </>
  );
}

export default App;
