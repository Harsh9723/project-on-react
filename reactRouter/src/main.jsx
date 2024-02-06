import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/CountactUs.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader} from './Components/Github/Github.jsx' 
import LogIn from './Components/LogIn/LogIn.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path:"home",
//         element:<Home />
//       }, 
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contactUs",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
 createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='ContactUS' element={<ContactUs />} />
      <Route path='LogIn' element={<LogIn />} />
      <Route path='User/:Userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
