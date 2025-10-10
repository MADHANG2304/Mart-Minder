import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import Shop from "./pages/Shop";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <AuthProvider>
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>
    </ProductProvider>
    </AuthProvider>
  );
}

export default App;
