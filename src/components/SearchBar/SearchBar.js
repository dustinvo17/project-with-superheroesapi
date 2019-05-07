import React from 'react'
import './SearchBar.css'
const SearchBar = (props) => {
    return (
        <div className="ui container">
            <form className="ui form" onSubmit={(e)=>props.userFindSpecificHero(e)}>
                <div className="field">

                    <div className="ui massive icon input">
                        <input type="text" placeholder="Hero name..." onChange={(e)=>props.getUserInput(e)}/>
                        <i className="circular search link icon" onClick={(e)=>props.userFindSpecificHero(e)}></i>
                       
                    </div>
                </div>
            </form>
        </div>

    )
}
export default SearchBar
