import React from 'react';
import '../Create';
import '../Edit';


const Form = ({ handleFormSubmit, handleCancelClick, deck, setDeck }) => {
  // state
  // helper functions
  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="form-control"
          type="text"
          name="name"
          onChange={handleChange}
          value={deck.name}
          placeholder="Deck Name"
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          name="description"
          onChange={handleChange}
          value={deck.description}
          placeholder="Brief description of the deck"
          
        ></textarea>
        <button
        type="button"
          color="btn-secondary"
          
          onClick={handleCancelClick}
        >Cancel</button>
        <button color="btn-primary" type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Form;