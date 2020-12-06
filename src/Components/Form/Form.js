import React from 'react';
import "./Form.css"

const Form = ({ getSearch, search, updateSearch }) => {
    return (
        <div className="form-container">
            <h3>Look up recepies by ingredients, get inspired..</h3>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="write your ingredient here.."></input>
                <button className="search-button" type="submit">
                    Search
                </button>

            </form>
        </div>
    );
}

export default Form;