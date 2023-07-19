import React from "react";
import Board from "./Board";
import PropTypes from 'prop-types';
import "./BoardList.css";

const BoardList = ({boards, setSelectedBoard, getCards}) => {
    const getBoardList = (boards) => {
        return boards.map((board) => {
            return (
                <Board
                key={board.board_id}
                board_id={board.board_id}
                owner={board.owner}
                title={board.title}
                setSelectedBoard={setSelectedBoard}
                getCards={getCards}
                />
            );
        });
    };
    return (
        <div className="boardlist">
            <div className="boardlist-label">PICK A BOARD:</div>
            {getBoardList(boards)}
        </div>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number,
            owner: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    setSelectedBoard: PropTypes.func.isRequired,
    getCards: PropTypes.func.isRequired
};


export default BoardList;