import React from "react";
import PropTypes from 'prop-types';
import './Board.css';


const Board = ({board_id, title, owner, setSelectedBoard, getCards, selectedBoard, deleteBoard}) => {
    const isSelected = (selectedBoard === board_id) ? 'active' : '';

    return (
        <button className={`board ${isSelected}`}
        onClick={() => getCards(board_id)}
        onDoubleClick={() => deleteBoard(board_id)}>
            {title}
        </button>
    
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setSelectedBoard: PropTypes.func.isRequired,
    getCards: PropTypes.func.isRequired,
    selectedBoard: PropTypes.number.isRequired
};

export default Board;