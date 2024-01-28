import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { init } from "./store/actions/init";
import { useAppDispatch } from "./hooks/index";

import Layout from "./components/Layout";

import ErrorBoundary from "./components/ErrorBoundary";

// Pages
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
  // const dispatch = useAppDispatch();
  // dispatch(init());

  return (
    <ChakraProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
