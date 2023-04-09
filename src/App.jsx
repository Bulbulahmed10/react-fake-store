import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderAnimation from "./Components/LoaderAnimation/LoaderAnimation";

const App = () => {
  const navigation = useNavigation();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `AHMED SHOP - HOME`;
    } else {
      document.title = `AHMED SHOP ${location.pathname
        .replace("/", "- ")
        .toUpperCase()}`;
    }
    if(location.state) {
      document.title = location.state
    }
  }, [location.pathname]);
  return (
    <>
      <div>
        <Header />
        <div className="text-center mt-20">
          {navigation.state === "loading" && <LoaderAnimation />}
        </div>
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
