import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';


const NewCardForm = ({ addCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');


  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value
    });
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    if (formFields.message.length > 40) {
      setErrorMessage('You need less BEEF');
    } else if (formFields.message.length < 2) {
      setErrorMessage('You need More BEEF');
    } else {
    addCardCallback({
      message: formFields.message
    });

    setFormFields({
      message:''
    });
  }
};

  return(
    <form onSubmit={onFormSubmit}>
      <div className="input-fields">
        
        <label htmlFor='message'>Message</label>
        <input
          id='message'
          name='message'
          value={formFields.message}
          onChange={onMessageChange}
          placeholder='Who Got Beef?'
              required
          className={errorMessage ? 'error' : ''}
        />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button
        type='submit'
        value='Add Card'>
        Add Card
        </button>
      
    </form>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;