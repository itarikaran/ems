import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import EmployeeList from "./EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;