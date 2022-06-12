import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

import './App.css';
import './mock-ui/basic-ui.css';

import Special from "./components/Special";
import Recipe from "./components/Recipe";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recipe/:uuid" element={<Recipe />} />
          <Route path="/special/:uuid" element={<Special />} />
        </Routes>
    </div>
  );
}

export default App;
