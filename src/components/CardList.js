import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import "./CardList.css";


const CardList = ({cards, deleteCard, updateBeefCount}) => {
    const getCardList = (cards) => {
        return cards.map((card) => {
            return (
                <Card
                key={card.card_id}
                card_id={card.card_id}
                message={card.message}
                likes_count={card.likes_count}
                board_id={card.board_id}
                deleteCard={deleteCard}
                updateBeefCount={updateBeefCount}
                />
            );
        });
    };
    return (
        <div className="cardlist">
            {getCardList(cards)}
        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteCard:PropTypes.func.isRequired,
    updateBeefCount:PropTypes.func.isRequired,
};

export default CardList;