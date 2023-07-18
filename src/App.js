import Board from './components/Board';
import './App.css';
import CardList from './components/CardList';
import BoardList from './components/BoardList';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div class="flex-container">
          <BoardList />
          <CardList cards={CARDS} />
        </div>
      </main>
    </div>
  );
}

export default App;
