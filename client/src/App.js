import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
