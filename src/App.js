import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Myorders from './Pages/Home/Myorders/Myorders';
import Purchase from './Pages/Home/Tools/Purchase/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Review from './Pages/Reviews/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/blogs' element={ <Blogs></Blogs> }></Route>
            <Route path='/myorders' element={ <Myorders></Myorders> }></Route>
            <Route path='/review' element={ <Review></Review> }></Route>
            <Route path='/product/:productId' element={ 
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
             }></Route>
            <Route path='/dashboard' element={ <Dashboard></Dashboard> }></Route>
            <Route path='/login' element={ <Login></Login> }></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={ <PageNotFound></PageNotFound> } ></Route>
        </Routes>      
        <Footer></Footer>
    </div>
  );
}

export default App;
