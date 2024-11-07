
import Business from "./Pages/Business.jsx"
import Company from "./Pages/Companies.jsx"
// import Home from "./Pages/Home.jsx"
import Help from "./Components/Home/Help.jsx"
import Personal from "./Pages/Personal.jsx"
import Header from "./Static/Header.jsx"
import Footer from "./Static/Footer.jsx"
// import Info from "./Pages/Info.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"



const App = () => {
    return ( 
      <BrowserRouter>
        <div>
          <Header/>
            <Routes>
             
               <Route path="/Business" element={<Business/>}/>
              <Route path="/Company" element={<Company/>}/>
              <Route path="/Help" element={<Help/>}/>
            
            </Routes>

          {/* <Home/> */}
          <Footer/>

        </div>
      </BrowserRouter>

     );
}
 
export default App;

