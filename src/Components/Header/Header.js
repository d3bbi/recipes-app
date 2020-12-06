import React from 'react';
import "./Header.css"
import imagine from "../../Assets/Images/family_dinner.jpg";


const head = () => {
    return (
        <div className = "header">
            <h1>Recipes App</h1>
            <h3>What do we cook today?</h3>
            <img src={imagine} alt="woman cooking"></img>
        </div>
    );
}



export default head;