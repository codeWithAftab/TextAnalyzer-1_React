import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar";
import Crousals from "./Components/crousals";
import TextConverter from "./Components/TextConverter";
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <Navbar title="TextAnalyzer"/>
    <TextConverter title="Enter Text To Analyze.." />
    <Footer title="TextAnalyzer"/>

    </>
  );
}

export default App;
