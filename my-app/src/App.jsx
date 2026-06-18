
import { Routes,Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return(
    <Routes>

      <Route path="/"element={<Home/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
      <Route path="/dashboard"element={<Dashboard/>}/>

      

    </Routes>
    
  )

                     
}


export default App
  