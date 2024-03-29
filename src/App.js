import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAreview from './Pages/Dashboard/AddAreview/AddAreview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Orders from './Pages/Dashboard/Orders/Orders';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Tools/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Review from './Pages/Reviews/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import EditProfile from './Pages/Dashboard/EditProfile/EditProfile';
import AllProducts from './Pages/AllProducts/AllProducts';
import About from './Pages/About/About';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div id='main-app'>
        <div className='max-w-7xl mx-auto px-12'>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={ <Home></Home> }></Route>
            <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/review' element={ <Review></Review> }></Route>
            <Route path='/product/:productId' element={
                <Purchase></Purchase>
             }></Route>
            <Route path='/dashboard' element={ <Dashboard></Dashboard> }>

            <Route index element={ <Orders></Orders> }></Route>
          <Route path="orders" element={  <Orders></Orders>  }></Route>
          <Route path="profile" element={ <MyProfile></MyProfile> }></Route>
          <Route path='/dashboard/editProfile' element={ <EditProfile></EditProfile> }></Route>

          <Route path="addAreview" element={ <AddAreview></AddAreview> }></Route>
          <Route path="payment/:id" element={ <Payment></Payment> }></Route>
            </Route>
            <Route path='/login' element={ <Login></Login> }></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={ <PageNotFound></PageNotFound> } ></Route>
        </Routes>  

        <Footer></Footer>
        <ToastContainer />
        </div>
    </div>
  );
}

export default App;
