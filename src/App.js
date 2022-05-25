import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddAreview from './Pages/Dashboard/AddAreview/AddAreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Orders from './Pages/Dashboard/Orders/Orders';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Tools/Purchase/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Myportfolio from './Pages/Myportfolio/Myportfolio';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Review from './Pages/Reviews/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './Pages/Dashboard/EditProfile/EditProfile';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/blogs' element={ <Blogs></Blogs> }></Route>
            <Route path='/review' element={ <Review></Review> }></Route>
            <Route path='/myportfolio' element={ <Myportfolio></Myportfolio> }></Route>
            <Route path='/product/:productId' element={ 
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
             }></Route>
            <Route path='/dashboard' element={ <Dashboard></Dashboard> }>
            <Route index element={ <MyProfile></MyProfile> }></Route>
            <Route path='/dashboard/editProfile' element={ <EditProfile></EditProfile> }></Route>
          <Route path="orders" element={ <Orders></Orders> }></Route>
          <Route path="addAreview" element={ <AddAreview></AddAreview> }></Route>
            </Route>
            <Route path='/login' element={ <Login></Login> }></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={ <PageNotFound></PageNotFound> } ></Route>
        </Routes>  

        <Footer></Footer>
        <ToastContainer />
    </div>
  );
}

export default App;
