import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/message" />} />
        <Route path="/message" element={<Dashboard />} />
        <Route path="/message/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
