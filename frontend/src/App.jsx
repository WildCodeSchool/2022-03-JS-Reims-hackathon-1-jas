import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeBin from "./pages/HomeBin";
import AwayBin from "./pages/AwayBin";
import Connect from "./pages/Connect";
import MyBin from "./pages/MyBin";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homebin" element={<HomeBin />} />
            <Route path="/awaybin" element={<AwayBin />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/mybin" element={<MyBin />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
