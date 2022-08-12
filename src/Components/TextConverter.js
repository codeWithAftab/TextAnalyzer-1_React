import React , { useState } from 'react'
export default function TextConverter(props) {
    let mystyle;
    if(props.isDark){
        mystyle = {
            color:"white",
            backgroundColor: "#0d3155"
        }
        document.body.style.backgroundColor = "#0d3155";

      }
      
      else{
        document.body.style.backgroundColor = "white";
        mystyle = {
            color:"black",
            backgroundColor: "white"
        }
    }

    const changeInText = (event)=>{
        console.log("Change detected.")
        setText(event.target.value)
    }
    const makeLower = ()=>{
        console.log("Lower detected." + text)
        let newtext = text.toLowerCase();
        setText(newtext)

    }
    const makeCapital = ()=>{
        console.log("Capital detected.")
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const makeCapitalize = ()=>{
        console.log("Capitalize detected.")
        
        let Capitalize = [];
        let ntext = text.toLowerCase().split(".");
        ntext.forEach(element => {
            let word;
            if (element.charAt(0) == "\n") {
                console.log("yes")
                word = element.charAt(1).toUpperCase() + element.slice(2,element.length)
                word = "\n"+word;
            }
            else{
                word = element.charAt(0).toUpperCase() + element.slice(1,element.length)

            }
            // let word = element.charAt(0).toUpperCase() + element.slice(1,element.length)
            console.log(word)
            Capitalize.push(word);
        });
        let capitalString = Capitalize.join(".")
        setText(capitalString)
    }
    const makeAllCapitalize = ()=>{
        console.log("Capitalize detected.")
        let Capitalize = [];
        let ntext = text.toLowerCase().split(" ");
        ntext.forEach(element => {
            let word;
            element = element.trim()
            word = element.charAt(0).toUpperCase() + element.slice(1,element.length)
            
            
            Capitalize.push(word);
        });
        let capitalString = Capitalize.join(" ")
        setText(capitalString)
    }
    const preview = ()=>{
        setprevText(text);
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        setcpBtnText("Copied")
    }
    const clearText = ()=>{
        setText("");
    }
    const [copybtn, setcpBtnText] = useState("Copy"); 
    const [ptext, setprevText] = useState(""); 
    const [text, setText] = useState(""); 
    return (
        <>
        <div className="container " style={mystyle}>
            <div className="mb-3 my-3">
                <p className='h3'>{props.title}</p>
                <textarea className="form-control" style={mystyle} onChange={changeInText} placeholder='Enter Text' value={text} rows="7"></textarea>
            </div>
            <div className="buttons" style={mystyle}>
                <button className="btn btn-danger mx-2" onClick={makeCapitalize}>Capitalize Each Line</button>
                <button className="btn btn-warning mx-2" onClick={makeAllCapitalize}>Capitalize All</button>
                <button className="btn btn-primary mx-2" onClick={makeCapital}>Uppercase</button>
                <button className="btn btn-success mx-2" onClick={makeLower}>Lowercase</button>
                <button className="btn btn-warning mx-2" onClick={clearText }>Clear Text</button>
                <button className="btn btn-warning mx-2" onClick={copyText}>{copybtn}</button>
            </div>
            <div className="info mt-3">
                <p className='h3'>
                    {text.split(" ").length - 1} Words  {text.length} Characters.
                </p>
                <p className='h5 mt-2'>
                    {0.8 * text.split(" ").length} minutes in reading.
                </p>
            </div>
        </div>
        <div className="container mt-3" style={mystyle}>
            {ptext.length === 0?<p className='h6'>Click Preview</p>:<p className='h6  bg-dark p-5 text-light'>{ptext}</p>}
            {/* <p className='h6  bg-dark p-5 text-light'></p> */}
            <button className='btn btn-primary' onClick={preview}>Preview</button>
        </div>
        </>
    )
}
