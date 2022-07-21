import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </nav>
  );
}
export default App;
