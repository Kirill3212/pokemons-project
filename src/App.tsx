import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { init } from "./store/actions/init";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();
  dispatch(init());

  return <RouterProvider router={router} />;
}

export default App;
