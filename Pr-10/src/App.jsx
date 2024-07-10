import { BrowserRouter, Route, Routes } from "react-router-dom"
import Axios from "./pages/axios"
import Fetch from "./pages/fetch"

function App() {


  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Axios/>}/>
          <Route path="/fetch" element={<Fetch/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
