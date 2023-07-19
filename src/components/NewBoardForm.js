import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';


const NewBoardForm = ({ addBoardCallback }) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: '',
  });
  const [isHidden, setHidden] = useState(true);

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addBoardCallback({
      title: formFields.title,
      owner: formFields.owner,
    });

    setFormFields({
      title: '',
      owner: '',
    });
  };

  const toggleForm = () => {
    if (isHidden) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  };

  const contentClass = isHidden ? 'form-content--hidden' : '';
  const toggleButtonText = isHidden ? 'create your own board' : 'hide creation form';

  return(
    <div className="new-board-form">
      <button className="toggle-btn" onClick={toggleForm}>{toggleButtonText}</button>
      <div className={`form-content ${contentClass}`}>
        <h3>CREATE YOUR OWN BOARD</h3>
        <form onSubmit={onFormSubmit}>
          <div className="input-fields">
            <label htmlFor='title'>Title:</label>
            <input
              id='title'
              name='title'
              value={formFields.title}
              onChange={onTitleChange}
              placeholder='Quarter Pounder Beef'
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor='owner'>Owner:</label>
            <input
              id='owner'
              name='owner'
              value={formFields.owner}
              onChange={onOwnerChange}
              placeholder='Ronald M.'
              required
            />
          </div>
        </form>
        <button 
        className="submit-btn"
        type="submit" 
        form="board-form" 
        value="Add Board">
          Add Board
        </button>
        </div>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;