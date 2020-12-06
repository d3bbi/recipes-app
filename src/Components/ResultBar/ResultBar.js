import React from 'react';
import "./ResultBar.css"


const ResultBar = ({search}) => {
    return (
        <div className = "result">
            <h3>Results for: </h3>
            <span>{search}</span>
        </div>
    );
}



export default ResultBar;