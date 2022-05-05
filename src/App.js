import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Landing } from './pages';

const NotFound = () => <h1>404</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
