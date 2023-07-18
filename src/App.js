import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
// import NewCardForm from './components/NewCardForm';
import './App.css';

const URL = 'https://beef-board.onrender.com/boards';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);

  const getBoards = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        const newBoards = response.data.map((board) => {
          return {
            board_id: board.board_id,
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
    .post(`${URL}`,params)
    .then((response) => { 
      getBoards();
    });
  };

  const getCards = () => {
    axios
      .get('https://beef-board.onrender.com/cards')
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

  useEffect(() => {
    getBoards();
    getCards();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <section>
          <BoardList boards={boardData}/>
        </section>
        <section>
          <CardList cards={cardData} />
        </section>
        <section>
          <span>CREATE YOUR OWN BOARD:</span>
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
