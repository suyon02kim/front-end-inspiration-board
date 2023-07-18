import React from "react";
import PropTypes from 'prop-types';
import './Board.css';


const Board = ({board_id, title, owner}) => {
    return (
        <div className="board">
            {title}
        </div>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Board;