
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Speaker from './pages/speaker';
import Headphones from './pages/headphones';
import Earphones from './pages/earphones';
import Footer from './components/footer/footer';

function App() {

  return <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/headphones' element={<Headphones/>}/>
        <Route path='/speaker' element={<Speaker/>}/>
        <Route path='/earphones' element={<Earphones/>}/>
      </Routes>
      <Footer/>
  </>
  
}

export default App
