import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "sucess")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "sucess")
    }

    // const handleCopy = () => {
    //     navigator.clipboard.writeText(text);
    // }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "sucess")

    }


    const handleReset = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "sucess")
    }

    const handleCapitalize = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Converted to capitalize!", "sucess")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "sucess")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#102a43' : '#ffffff', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary me-2 mb-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleReset}>Reset</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleCapitalize}>Convert to Capitalize</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

