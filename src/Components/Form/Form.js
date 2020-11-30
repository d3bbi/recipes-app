import React from 'react';
import "./Form.css"

const Form = ({ getSearch, search, updateSearch }) => {
    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                <button className="search-button" type="submit">
                    Search
          </button>

            </form>
        </div>
    );
}

export default Form;