import React from 'react'
import FetchWeather from './FetchWeather';

function SearchBar({ handleSearchBar, handleSubmit, userInput, setBackground, background }) {

    return (
        <div className="what">
            <form>
                <input type="text" placeholder="Search for a city!" onChange={handleSearchBar} className="searchBar" />
                <input type="submit" onClick={handleSubmit} className="submitButton" />
            </form>

            <FetchWeather userInput={userInput} setBackground={setBackground} background={background} />
        </div>
    )
}

export default SearchBar
