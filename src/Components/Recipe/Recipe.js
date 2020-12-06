import React from 'react';
import "./Recipe.css"


const Recipe = ({ title, ingredients, dietLabels, image }) => {
    return (
        <div className="recipe-wrapper">
            <h1>{title}</h1>
            <div className="ingredients">
                <div>
                    <h3>Ingredients</h3>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p>{dietLabels}</p>
                </div>
                <img src={image} alt={title}></img>
            </div>
        </div>
    );
}



export default Recipe;