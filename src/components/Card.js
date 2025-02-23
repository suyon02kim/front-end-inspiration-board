import React from "react";
import PropTypes from 'prop-types';
import './Card.css';



const Card = ({card_id, message, likes_count, board_id, deleteCard, updateBeefCount}) => {
    // delete function, add_likes function
    return (
        <div className="card">
            <div className="id">#{card_id}</div>
            <div className="message">{message}</div>
            <div className="controls">
                <div className="likes">{likes_count} 🥩</div>
                <button className="upvote-btn" onClick={() => updateBeefCount(likes_count,card_id)}>upvote</button>
                <button className="delete-btn" onClick={() => deleteCard(card_id)}>delete</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    updateBeefCount: PropTypes.func.isRequired,
};

export default Card;