import React from 'react';
import '../Create';
import '../Edit';


const Form = ({ handleFormSubmit, handleCancelClick, deck, setDeck }) => {
  
  // helper functions
  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <input
          id="front"
          className="form-control"
          type="text"
          front="front"
          onChange={handleChange}
          value={deck.front}
          placeholder="Front side of card"
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          className="form-control"
          name="back"
          onChange={handleChange}
          value={deck.back}
          placeholder="Back side of card"
          
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