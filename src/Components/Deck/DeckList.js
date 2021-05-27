import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { listDecks } from "../../utils/api";

function DeckList() {
  const [list, setList] = useState([]);
  function loadDecks() {
    listDecks().then(setList);
  }
  useEffect(loadDecks, []);
  const deckList = list.map((deck) => (
    <div class="card" style={{ margin: 10, padding: 10 }}>
      <div
        class="card-title"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h5> {deck.name} </h5>

        <p> {deck.cards.length} cards </p>
      </div>
      {deck.description}
        <div
            style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            }}
        >
            <div>
                <Link to={`/decks/${deck.id}`}>
                    <button class="btn btn-secondary">
                        <span class="oi oi-eye"></span>View
                    </button>
                </Link>
            <button class="btn btn-primary">
                <span class="oi oi-book"></span>Study
            </button>
            </div>
            <button class="btn btn-danger">
            <span class="oi oi-trash"></span>
            </button>
        </div>
    </div>
  ));
  return deckList;
}

export default DeckList;
