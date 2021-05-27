import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../../../utils/api";
import Form from "../Form";

const EditCard = () => {
  // UseHistory
  const history = useHistory;
  // routeMatch
  const { params } = useRouteMatch();
  // state
  const [card, setCard] = useState({
    front: "",
    back: "",
  });
  // useEffect (readCard)
  useEffect(() => {
    const getSpecificCard = async () => {
      const response = await readCard(params.cardId);
      setCard(response);
    };
    getSpecificCard();
  }, [params.cardId]);
  // event handlers
  const handleFormSubmit = async () => {
    await updateCard(card).then(history.push(`/Cards/${params.cardId}`));
  };

  const handleCancelClick = (event) => {
    history.goBack();
  };

  return (
    <div className="EditCard">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${params.deckId}`}>{params.deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <Form
        handleCancelClick={handleCancelClick}
        handleFormSubmit={handleFormSubmit}
        card={card}
        setCard={setCard}
      />
    </div>
  );
};
export default EditCard;
