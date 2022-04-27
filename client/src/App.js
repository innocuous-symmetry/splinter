import './styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Welcome from './components/Welcome';
import FulLGameView from './components/Game/FullGameView';
import Store from './store/Store';

function App() {
  return (
    <Store>
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Welcome />}/>
              <Route path="/gameboard" element={<FulLGameView />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </Store>
  );
}

export default App;
