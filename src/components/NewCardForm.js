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
      setErrorMessage('You need LESS BEEF');
    } else if (formFields.message.length < 2) {
      setErrorMessage('You need MORE BEEF');
    } else {
    addCardCallback({
      message: formFields.message
    });
    setErrorMessage('');
    setFormFields({
      message:''
    });
  }
};

// HIDDEN FEATURES
  const [isHidden, setHidden] = useState(false);
  const toggleForm = () => {
  if (isHidden) {
    setHidden(false)
  } else {
    setHidden(true)
  }
};

  const contentClass = isHidden ? 'form-content--hidden' : '';
  const toggleButtonText = isHidden ? 'add some beef ?' : 'hide card creation form';

  return(
    <div className="new-card-form">
      <button className="toggle-btn" onClick={toggleForm}>{toggleButtonText}</button>
      <div className={`form-content ${contentClass}`}>
    <h3>ADD SOME BEEF ?</h3>
    <form id="card-form" onSubmit={onFormSubmit}>
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
          className="submit-btn"
          type='submit'
          value='Add Card'>
          Add Card
        </button>
      </form>
      </div>
  </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;