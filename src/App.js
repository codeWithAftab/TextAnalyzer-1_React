import logo from './logo.svg';
import './App.css';
import { Navbar } from "./Components/Navbar";
import Crousals from "./Components/crousals";
import TextConverter from "./Components/TextConverter";
import Footer from './Components/Footer'
import Alerts from './Components/Alerts'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false)
  const [darkWorld, setDarkWorld] = useState("Enter In Dark World");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType
    })
  }

  const toggleMode = () => {
    if (isDark) {
      setIsDark(false)
      setDarkWorld("Enter in Dark World")
      showAlert("Light Mode has been Enable.", "success")
    }
    else {
      setDarkWorld("Out From Dark World")
      setIsDark(true)
      showAlert("Dark Mode has been Enable.", "success")
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextAnalyzer" isDark={isDark} darkWorld={darkWorld} toggle={toggleMode} />
      <Alerts Alert={alert} />
          <Routes>
            <Route exact path="/about" element={<TextConverter title="Entersdkjsjhfj yor Text.." isDark={isDark} />}/>

            <Route path="/" element={<TextConverter title="Enter yor Text.." isDark={isDark} showAlert={showAlert}/>}/>
            
          </Routes>

      <Footer title="TextAnalyzer" isDark={isDark} />
      </Router>
    </>
  );
}

export default App;
