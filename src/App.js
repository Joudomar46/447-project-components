// Nav bar component
import Navbar from "./layouts/Navbar";
// all the page component
import {Home} from "./pages/Home.js"
import {Create} from "./pages/create/Create"
import Contact from "./pages/ContactUs"
// import the routing functionality
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';


// Here is our main which builds the navbar and redirects!
function App() {
  return ( 
    <>
        <BrowserRouter>  
      <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/create/Create" element={<Create />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  </>

  )
}

export default App;
 