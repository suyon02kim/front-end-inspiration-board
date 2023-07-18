import React from "react";
import PropTypes from 'prop-types';
import './Card.css';



const Card = ({card_id, message, likes_count, board_id}) => {
    // delete function, add_likes function
    return (
        <div class="card">
            <div class="message">is this working??</div>
            <div class="controls">
                <div class="likes">3 🥩</div>
                <button class="delete-btn">delete</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
};

export default Card;