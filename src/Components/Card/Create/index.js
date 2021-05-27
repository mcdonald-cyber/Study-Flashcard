import React, { useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { createCard } from '../../../utils/api';
import Form from '../Form/index';

const CreateCard = () => {
  const {params} = useRouteMatch();
  // useHistory
  const history = useHistory();
  // state
  const [card, setCard] = useState({
    front: '',
    back: '',
  });
  // event handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault();
     await createCard(card);
    history.goBack();
  };
  const handleCancelClick = () => {
    history.push('/');
  };
  return (
    <div className="Create">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/decks/:deckId">
              {params.deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create card
          </li>
        </ol>
      </nav>
      <h2>Create card</h2>
      <Form
        card={card}
       setCard= {setCard}
        handleFormSubmit={handleFormSubmit}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};
export default CreateCard;