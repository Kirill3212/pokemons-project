import { Outlet } from "react-router-dom";
import { createContext } from "react";

import Header from "./Header";
import Footer from "./Footer";

// Context
const errMessage = {
  header: "OH Nooo...Oops!",
  message: "Sorry, something went wrong there. Try again",
};
export const ErrorMessageContext = createContext(errMessage);

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <ErrorMessageContext.Provider value={errMessage}>
          <Outlet />
        </ErrorMessageContext.Provider>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
