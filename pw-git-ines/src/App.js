import { Routes, Route } from "react-router-dom";
import './App.css';
import RecipesPage from './Pages/RecipesPage';
import WelcomingPage from "./Pages/WelcomingPage";
import NavBar from "./NavBar";
import RecipesDetail from "./Pages/RecipesDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<WelcomingPage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="/recipes/:recipeID" element={<RecipesDetail />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
