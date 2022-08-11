import React , { useState } from 'react'
export default function TextConverter(props) {
    
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
    const [text, setText] = useState(); 
    return (
        <div className="container">
            <div className="mb-3 my-5">
                <p className='h3'>{props.title}</p>
                <textarea className="form-control" onChange={changeInText} placeholder='Enter Text' value={text} rows="10"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={makeCapital}>Uppercase</button>
                <button className="btn btn-success mx-2" onClick={makeLower}>Lowercase</button>
                <button className="btn btn-warning mx-2" onClick={makeAllCapitalize}>Capitalize All</button>
                <button className="btn btn-danger mx-2" onClick={makeCapitalize}>Capitalize Each Line</button>

        </div>

    )
}
