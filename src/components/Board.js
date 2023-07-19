import React from "react";
import PropTypes from 'prop-types';
import './Board.css';


const Board = ({board_id, title, owner, setSelectedBoard, getCards}) => {
    // const getBoardCards = () => {
    //     setSelectedBoard(board_id);
    //     getCards();

    // }
    return (
        <button className="board" 
        onClick={() => getCards(board_id)}>
            {title}
        </button>
    
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setSelectedBoard: PropTypes.func.isRequired,
    getCards: PropTypes.func.isRequired
};

export default Board;