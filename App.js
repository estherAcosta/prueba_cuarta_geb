
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camara from './componente/camara';
import './App.css';
// import Microfono from './componente/microfono';





function App() {

  return (
    
    <div className="App">
    
    
      <Routes>
       
         <Routes/>
             <Route path="/camara" element={<Camara/>}></Route>
             {/* <Route path="/Microfono" element={<Microfono/>}></Route> */}
               <BrowserRouter> </BrowserRouter>
            
        </Routes>
  
        
 
    </div>
  );
}

export default App;