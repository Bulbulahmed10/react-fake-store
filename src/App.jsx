import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigation = useNavigation();
  return (
    <>
    <div>
      <Header />
      <div className="text-center mt-20">
        {navigation.state === "loading" && (
          <progress className="progress w-56"></progress>
        )}
      </div>
      <Outlet />
    </div>
    <ToastContainer />
    </>
    
  );
};

export default App;
