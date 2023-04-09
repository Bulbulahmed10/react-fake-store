import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import LoaderAnimation from "./Components/LoaderAnimation/LoaderAnimation";

const App = () => {
  const navigation = useNavigation();
  return (
    <>
    <div>
      <Header />
      <div className="text-center mt-20">
        {navigation.state === "loading" && (
          <LoaderAnimation />
        )}
      </div>
      <Outlet />
    </div>
    <ToastContainer />
    </>
    
  );
};

export default App;
