import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Welcome from './components/Welcome';
import GameBoard from './components/Game/GameBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/gameboard" element={<GameBoard />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
