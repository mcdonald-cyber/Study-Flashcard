import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { listCards } from "../../utils/api";


function CardList({params}) {

  console.log(params)
  const [list, setList] = useState([]);

  useEffect(() => {
    function loadCards() {
        listCards(params).then(setList);
      }
      loadCards();}, []
  );
  console.log(list);

  
  return list.map((card) => (


    <div class="card" style={{ margin: 10, padding: 10 }}>
        
      <div
        class="card-title"
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
                <button class="btn btn-secondary">
                    <span class="oi oi-eye"></span>Edit
                </button>
            </Link>
            <button class="btn btn-danger">
            <span class="oi oi-trash"></span>
            </button>
            </div>
        </div>
    </div>
  ));
 
}

export default CardList;
