import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [baseData, setBaseData] = useState([]); // default as object

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/swiggy");
      const json = await res.json();
      console.log(json?.data);
      const card = json?.data?.cards
      setBaseData(card);  
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <UserContext.Provider value={baseData}>
      {children}
    </UserContext.Provider>
  );
};
