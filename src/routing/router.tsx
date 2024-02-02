import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { PrivateRoute } from "./privateRoute";

// Pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SingleCard from "../pages/singleCard/SingleCard";
import Favorites from "../pages/Favorites";
import History from "../pages/History";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Search from "../pages/Search";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={"/"}
      element={
        <Suspense fallback={<Loading />}>
          <Layout />
        </Suspense>
      }
    >
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Search" element={<Search />} />

      <Route
        path="/Favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />

      <Route
        path="/History"
        element={
          <PrivateRoute>
            <History />
          </PrivateRoute>
        }
      />

      <Route
        path="/SingleCard"
        element={
          <PrivateRoute>
            <SingleCard />
          </PrivateRoute>
        }
      />
    </Route>
  )
);
