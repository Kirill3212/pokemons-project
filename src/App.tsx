import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import Layout from "./components/Layout"

// Pages
import Home from "./pages/Home"
import CardsList from "./pages/CardsList"
import Favorites from "./pages/Favorites"
import History from "./pages/History"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route index element={<Home />} />
     <Route path ='CardsList' element={<CardsList/>}/>
     <Route path="Favorites" element={<Favorites/>}/>
     <Route path="History" element={<History/>}/>
     <Route path="SignIn" element={<SignIn/>}/>
     <Route path="SignUp" element={<SignUp/>}/>
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
