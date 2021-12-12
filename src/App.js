import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import QuoteDetail from "./pages/QuoteDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route exact path="quotes" element={<Quotes />} />
        <Route path="quote/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}

export default App;
