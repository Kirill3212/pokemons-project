import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { PrivateRoute } from "./privateRoute";

// Pages
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const SingleCard = lazy(() => import("../pages/singleCard/SingleCard"));
const Favorites = lazy(() => import("../pages/Favorites"));
const History = lazy(() => import("../pages/history/History"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const Search = lazy(() => import("../pages/Search"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={"/"}
      element={
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Layout />
          </ErrorBoundary>
        </Suspense>
      }
    >
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/SingleCard/:id" element={<SingleCard />} />

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
    </Route>
  )
);
