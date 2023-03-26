import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

import Search from "./components/Seach";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
