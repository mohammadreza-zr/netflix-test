import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Other from "./Other";

function App() {
  return (
    <div className="App">
      <h1>This is App Component</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
