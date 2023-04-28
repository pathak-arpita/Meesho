import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import Body from './Components/Body';
import Errorpage from './Components/Errorpage';
import About from './Components/About';
import Login from './Components/Login'
import Product from './Components/Product';
import SignUp from './Components/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';
import {createBrowserRouter, Outlet , RouterProvider } from 'react-router-dom';

import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import Cart from './Components/Cart';

 function App() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element : <Provider store={store}><App/></Provider>,
    errorElement : <Errorpage/>,

    children :[
      {
        path : "/",
        element : <Body />
      },
      {
        path :"/cart",
        element : <Cart />
      },
      {
        path :"/Product/:id",
        element : < Product/>
      },
    ]
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
