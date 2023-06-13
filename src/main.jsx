import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Providers/AuthProvider/AuthProvider';
import Classes from './Pages/Classes/Classes';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import Dashboard from './LayOut/Dashboard';
import Home from './Pages/Home/Home/Home';
import Instructors from './Pages/Home/Instructors/Instructors';
import {                                                                                                                     
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SelectedClasses from './Pages/Dashboard/SelectedClasses/SelectedClasses';
import Enrollod from './Pages/Dashboard/Enrollod/Enrollod';
import PaymentHistory from './Pages/Dashboard/PaymentHistory/PaymentHistory';
import ManageUser from './Pages/Dashboard/ManageUser/ManageUser';
import ManageClasses from './Pages/Dashboard/ManageClasses/ManageClasses';
import AddClasses from './Pages/Dashboard/AddClasses/AddClasses';
import MyClasses from './Pages/Dashboard/MyClasses/MyClasses';
import Payment from './Pages/Dashboard/Payment/Payment';
import Update from './Pages/Dashboard/Update/Update';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'instructors',
        element:<Instructors></Instructors>
      },
      {
        path:'classes',
        element:<Classes></Classes>
      },
     
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'registration',
        element:<Registration></Registration>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
       path:'/dashboard',
       element:<DashboardHome></DashboardHome>
      },
      {
        path:'selectedClass',
        element:<SelectedClasses></SelectedClasses>
      },
      {
        path:'enrollod',
        element:<Enrollod></Enrollod>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'manageuser',
        element:<ManageUser></ManageUser>
      },
      {
        path:'manageclasses',
        element:<ManageClasses></ManageClasses>
      },
      {
        path:'addclasses',
        element:<AddClasses></AddClasses>
      },
      {
        path:'myclasses',
        element:<MyClasses></MyClasses>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'myupdatedclass/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/myupdatedclass/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
