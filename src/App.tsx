import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { init } from "./store/actions/init";
import { useAppDispatch } from "./hooks";

// Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SingleCard from "./pages/SingleCard";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Search from "./pages/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="SingleCard" element={<SingleCard />} />
      <Route path="Favorites" element={<Favorites />} />
      <Route path="History" element={<History />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Search" element={<Search />} />
    </Route>
  )
);

function App() {
  const dispatch = useAppDispatch();
  dispatch(init());

  return <RouterProvider router={router} />;
}

export default App;
