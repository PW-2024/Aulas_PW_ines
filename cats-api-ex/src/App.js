import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import List from './components/List';
import History from './components/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
