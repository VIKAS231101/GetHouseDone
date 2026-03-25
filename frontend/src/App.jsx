import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>

      <nav className="absolute top-0 left-0 w-full z-50 flex gap-6 p-6 text-white font-semibold">
        <Link className="hover:text-blue-400" to="/">Home</Link>
        <Link className="hover:text-blue-400" to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;