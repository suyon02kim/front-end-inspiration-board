import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
// import NewCardForm from './components/NewCardForm';
import './App.css';

const URL = 'https://beef-board.onrender.com/';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();

  const getBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        const newBoards = response.data.map((board) => {
          return {
            board_id: board.id,
            title: board.title,
            owner: board.owner,
            cards: board.cards,
          };
        });
        setBoardData(newBoards);
      });
  };
  
  const addBoardData = (newBoardData) => { 
    const params = {title:newBoardData.title, owner:newBoardData.owner}
    axios 
    .post(`${URL}/boards`,params)
    .then(() => { 
      getBoards();
    });
  };

  const getCards = (board_id) => {
    setSelectedBoard(board_id);
    console.log(boardData)
    axios
      .get(`${URL}/boards/${board_id}/cards`)
      .then((response) => {
        const newCards = response.data.map((card) => {
          return {
            message: card.message,
            likes_count: card.likes_count,
            board_id: card.board_id,
          };
        });
        setCardData(newCards);
      });
  };
  // const deleteCard = (card_id) => {
  //   axios
  //   .delete(`${URL}/cards/${card_id}`)
  //   .then(()=> {
  //     getCards(selectedBoard);
  //   });
  //   };
  // };
  useEffect(() => {
    getBoards();
  }, []);

  // const toggleForm = () => {

  // };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <section>
          <BoardList boards={boardData} setSelectedBoard={setSelectedBoard} getCards={getCards}/>
        </section>
        <section>
          <CardList cards={cardData} />
        </section>
        <section>
          {/* <button onclick="toggleForm()">Hide Form</button> */}
          <NewBoardForm addBoardCallback={addBoardData} />
        </section>
        <section>
          {/* <NewCardForm addCardCallback={setCardData} /> */}
        </section>
      </main>
    </div>
  );
}

export default App;
