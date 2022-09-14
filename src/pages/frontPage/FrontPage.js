import React, { useRef, useState } from "react";
import "./FrontPage.css"

var name = "Joe";
//const promptValue = prompt("Type in your new name!");
function FrontPage() {
    const [name, setName] = useState('randomer'); 
    const onChangeHandler = event => setName(event.target.value);
    const handleClick = event => {
        event.preventDefault();
    }
    console.log(name);
    const node = useRef(null);
    return(
        <div>
            <h1 class="cname">Welcome, {name}</h1>
            <h2>This is your dashboard</h2>
            <br/>
            <p>Do you wish to change your name?</p>
            <input type="text" id="inputName" name="inputName" onChange={onChangeHandler} value={name}></input>
            <button onClick={handleClick}>Change</button>
        </div>
    )
    
}
export default FrontPage;