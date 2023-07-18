import React, { useState } from 'react';
import PropTypes from 'prop-types';


// const NewCardForm = ({ addCardCallback }) => {
//   const [formFields, setFormFields] = useState({
//     title: '',
//     owner: '',
//   });

//   const onTitleChange = (event) => {
//     setFormFields({
//       ...formFields,
//       title: event.target.value
//     });
//   };

//   const onOwnerChange = (event) => {
//     setFormFields({
//       ...formFields,
//       owner: event.target.value
//     });
//   };

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     addBoardCallback({
//       title: formFields.title,
//       owner: formFields.owner,
//     });

//     setFormFields({
//       title: '',
//       owner: '',
//     });
//   };

//   return(
//     <form onSubmit={onFormSubmit}>
//       <div>
//         <label htmlFor='title'>Title:</label>
//         <input
//           id='title'
//           name='title'
//           value={formFields.title}
//           onChange={onTitleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor='owner'>Owner:</label>
//         <input
//           id='owner'
//           name='owner'
//           value={formFields.owner}
//           onChange={onOwnerChange}
//         />
//       </div>
//       <input
//         type='submit'
//         value='Add Board'
//       />
//     </form>
//   );
// };

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;