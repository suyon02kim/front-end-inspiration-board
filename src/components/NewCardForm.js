import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';


const NewCardForm = ({ addCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: ''
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value
    });
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    addCardCallback({
      message: formFields.message
    });

    setFormFields({
      message:''
    });
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
        />
      </div>
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