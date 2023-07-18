import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import './App.css';

const CARDS = [
  {
    card_id: 1,
    message: 'is this working?????',
    likes_count: 3,
    board_id: 1,
  },
  {
    card_id: 2,
    message: 'i like everyone',
    likes_count: -1,
    board_id: 1,
  },
];

const BOARDS = [
  {
    board_id: 1,
    owner: "jsmr",
    title: "jsmr",
  },
  {
    board_id: 2,
    owner: "jasmine",
    title: "jasmine",
  },
  {
    board_id: 3,
    owner: "sarah",
    title: "sarah",
  },
  {
    board_id: 4,
    owner: "mikalya",
    title: "mikayla",
  },
  {
    board_id: 5,
    owner: "ruth",
    title: "ruth",
  },
];

function App() {
  const [boardData, setBoardData] = useState(BOARDS);
  const [cardData, setCardData] = useState(CARDS);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <section>
          <BoardList boards={boardData}/>
        </section>
        <section>
          <CardList cards={CARDS} />
        </section>
        <section>
          <NewBoardForm addBoardCallback={setBoardData} />
        </section>
        <section>
          <NewCardForm addCardCallback={setCardData} />
        </section>
      </main>
    </div>
  );
}

export default App;
