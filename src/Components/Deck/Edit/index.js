import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { readDeck, updateDeck } from '../../../utils/api';
import Form from "../Form";

const EditDeck = () => {


  // UseHistory
  const history = useHistory;
  // routeMatch
  const { params } = useRouteMatch();
  // state
  const [deck, setDeck] = useState({
    name: '',
    description: '',
  });
  console.log("EditDeck params:", params)
  console.log("EditeDeck params.deckId:", params.deckId)
  
  useEffect(() => {
    const getSpecificDeck = async () => {
      const response = await readDeck(params.deckId);
      setDeck(response);
    };
    getSpecificDeck();
  }, [params.deckId]);
  // event handlers
  const handleFormSubmit = async () => {
    await updateDeck(deck).then(
        history.push(`/decks/${params.deckId}`)
    )
  };
  
  const handleCancelClick = (event) => {
      history.push(`/decks/${params.deckId}`)
  }

  return (
    <div className="EditDeck">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${params.deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h2>Edit Deck</h2>
     <Form handleCancelClick={handleCancelClick} handleFormSubmit={handleFormSubmit} deck={deck} setDeck={setDeck} />
   </div>
  );
};
export default EditDeck;