import react from "react"
import Login from "./Login"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"

function App() {

  return (
    <>
      
      {/* <Router>

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      </Router> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
