import React from "react";
import {Link} from "react-router-dom"
import DeckList from "../Deck/DeckList";



function Home () {
return (
    <div> <Link to="/decks/new"><button type="button" class="btn btn-secondary"><span class="oi oi-plus" ></span> Create Deck</button></Link>
        <DeckList />
    </div>
)
}

export default Home;