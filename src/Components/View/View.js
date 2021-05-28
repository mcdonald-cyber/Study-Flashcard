import React, {useState, useEffect} from "react";
import {useRouteMatch, Link} from "react-router-dom";
import Cards from "../View/CardList";
import { readDeck } from "../../utils/api";



function View () {
   const { params} = useRouteMatch();
   const [deck, setDeck] = useState({});
   
  useEffect(() => {
    const getSpecific = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecific();
  }, [params.deckId]);

console.log("View params:", params)
console.log("view deck:", deck)
   return (
    <div><nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item">
    <Link to="/"><span className="oi oi-home"></span> Home</Link></li>  
    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
    </ol>
  </nav> 
        <div><h5>{deck.name}</h5>{deck.description}</div>
            <div
                style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 5
                }}
            >
            <div>
                <Link to={`/decks/:deckId/edit`}>
                    <button className="btn btn-secondary" style={{margin: 5
            }}>
                        <span className="oi oi-eye"></span>Edit
                    </button>
                </Link>
                <button className="btn btn-primary" style={{margin: 5
                }}>
                    <span className="oi oi-book"></span>Study
                </button>
                
                <Link to="/decks/:deckId/cards/new"><button className="btn btn-secondary" style={{margin: 5
                }}><span className="oi oi-plus" ></span> Create Cards</button>
                </Link>
            </div>
            <button className="btn btn-danger">
            <span className="oi oi-trash"></span>
            </button>
        </div>
        <div>
            <h5>Cards</h5>
            </div>
        <Cards />
    </div>
)
}

export default View;