import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropsPage from "./components/PropsPage";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/props-page"
          element={<PropsPage message="Hello World!" />}
        />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
