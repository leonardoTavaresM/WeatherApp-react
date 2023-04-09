import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { DataContext } from "./DataContext";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataContext>
          <Body>
            <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </Body>
        </DataContext>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
