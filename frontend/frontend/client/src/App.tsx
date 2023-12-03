import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import axios from 'axios'
import { CategoriesList } from './Components/CategoriesList'
import { IndexPage } from './Components/Layout/IndexPage'
import { CategoryList } from './Components/Category/CategoryList'
import { Home } from './Components/Layout/Home'
import ProductSlice from './STORE/features/productSlice'
import { ProductDetailPage } from './Components/Pages/ProductPages/ProductDetailPage'
import { CartDetailPage } from './Components/Pages/CartPages/CartDetailPage'
import { routes } from './Routes/Routes'



function App() {
  
  return(
   <div className='app'>
      <RouterProvider router={routes}/>
   </div>
  )

  
}

export default App
