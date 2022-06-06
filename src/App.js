import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={
        <RequiredAuth>
        <Products />
          </RequiredAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
