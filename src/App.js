import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/blogs' element={ <Blogs></Blogs> }></Route>
            <Route path='/login' element={ <Login></Login> }></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>      
        <Footer></Footer>
    </div>
  );
}

export default App;
