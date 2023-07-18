import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';


const NewBoardForm = ({ addBoardCallback }) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: '',
  });

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

  return(
    <div class="new-board-form">
      <h3>CREATE YOUR OWN BOARD</h3>
      <form id="board-form" onSubmit={onFormSubmit}>
        <div class="input-fields">
          <label htmlFor='title'>Title:</label>
          <input
            id='title'
            name='title'
            value={formFields.title}
            onChange={onTitleChange}
            required
          />
        </div>
        <div class="input-fields">
          <label htmlFor='owner'>Owner:</label>
          <input
            id='owner'
            name='owner'
            value={formFields.owner}
            onChange={onOwnerChange}
            required
          />
        </div>
      </form>
      <button class="submit-btn"
      type="submit" 
      form="board-form" 
      value="Add Board">
        Add Board
      </button>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;