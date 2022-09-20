import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Purchases from './pages/Purchases';


function App() {
  return (
    <BrowserRouter>
      <h1 className='titulo'>Numbana Test</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Purchases/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
