import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Welcome from './components/Welcome';
import FulLGameView from './components/Game/FullGameView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/gameboard" element={<FulLGameView />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
