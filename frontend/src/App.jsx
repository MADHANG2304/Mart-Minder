import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Shop from "./pages/Shop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
