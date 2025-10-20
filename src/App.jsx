import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
  return ( 
  <BrowserRouter>
  <Header />
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/SignIn' element={<SignIn/>}/> 
      <Route path='/SignUp' element={<SignUp/>}/>     
    </Routes>
  </BrowserRouter>
  );
}
