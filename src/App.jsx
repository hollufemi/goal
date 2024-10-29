import Home from "./Pages/Home";
import Footer from "./Static/Footer";
import Header from "./Static/Header";
import Personal from "./Pages/Personal";
import Business from "./Pages/Business";
import Companies from "./Pages/Companies";
import { BrowserRouter, Routes, Route} from "react-router-dom";


const App = () => {
  return (  
    <div>
      
      <BrowserRouter>
      <Header/>
      <Home/>
      <Routes>
        <Route path="/" element={<Personal/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/companies" element={<Companies/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
};
 
export default App;


