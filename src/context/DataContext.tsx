import {useState, useEffect, createContext, ReactNode} from "react";

const DataContext = createContext([]);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/sensors.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export {DataContext, DataProvider};
