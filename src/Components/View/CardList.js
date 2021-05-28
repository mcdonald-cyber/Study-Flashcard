import React, {useState, useEffect} from "react";
import {Link, useRouteMatch} from "react-router-dom"
import { listCards } from "../../utils/api";


function Cards () {
const {params} = useRouteMatch();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    function loadCards() {
        listCards(params.deckId).then(setCardList);
      }
      loadCards();}, [params.deckId]
  );
  

  
  return cardList.map((card, index) => (

    <>
    <div key={index} className="card" style={{ margin: 10, padding: 10 }}>
        
      <div
        className="card-title"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
         {card.front} 

        <p>  </p>
      
      {card.back}
        <div>            
            <Link to="/card">
                <button className="btn btn-secondary">
                    <span className="oi oi-eye"></span>Edit
                </button>
            </Link>
            <button className="btn btn-danger">
            <span className="oi oi-trash"></span>
            </button>
            </div>
        </div>
    </div>
    </>
  ));
 
}

export default Cards;
