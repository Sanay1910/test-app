import React, { useState } from "react";
import "./FrontPage.css";

function FrontPage() {
    const [name, setName] = useState(''); 
    const onChangeHandler = event => setName(event.target.value);
    const handleClick = event => {
        event.preventDefault();
    }

    //Real time
    const [time, setTime] = useState();
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return(
        <div className="top-modal">
            <h1 className="welcome">Welcome, {name}</h1>
            <h2>This is your dashboard</h2>
            <div>{time}</div>
            <br/>
            <p>Do you wish to change your name?</p>
            <input type="text" id="inputName" name="inputName" onChange={onChangeHandler} value={name} placeholder="Enter your name here"></input>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Change</button>
        </div>
    )

}
export default FrontPage;