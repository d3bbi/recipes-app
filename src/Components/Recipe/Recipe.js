import React from 'react';
import "./Recipe.css"


const Recipe = ({ title, ingredients, dietLabels, image}) => {
    return (
        <div className="recipe-container">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{dietLabels}</p>
            <img src={image} alt={title}></img>
        </div>
    );
}



export default Recipe;