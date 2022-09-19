import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [name, setName] = useState("John Doe");

  function changeName(input) {
    setName(input);
  }

  const contextValue = {
    name,
    changeName
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
