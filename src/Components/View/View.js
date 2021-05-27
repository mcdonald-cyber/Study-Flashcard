import React, {useState, useEffect} from "react";
import {useRouteMatch, Link} from "react-router-dom";
import CardList from "../View/CardList";
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



   return (
    <div><nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item">
    <Link to="/"><span class="oi oi-home"></span> Home</Link></li>  
    <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>
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
                <Link to={`/`}>
                    <button class="btn btn-secondary" style={{margin: 5
            }}>
                        <span class="oi oi-eye"></span>Edit
                    </button>
                </Link>
                <button class="btn btn-primary" style={{margin: 5
                }}>
                    <span class="oi oi-book"></span>Study
                </button>
                
                <button class="btn btn-secondary" style={{margin: 5
                }}><span class="oi oi-plus" ></span> Create Cards</button>
            </div>
            <button class="btn btn-danger">
            <span class="oi oi-trash"></span>
            </button>
        </div>
        <div>
            <h5>Cards</h5>
            </div>
        <CardList params={params} />
    </div>
)
}

export default View;