import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div className="text-center">
        {navigation.state === "loading" && (
          <progress className="progress w-56"></progress>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default App;
