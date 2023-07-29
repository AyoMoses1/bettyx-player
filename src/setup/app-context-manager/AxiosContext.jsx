import React, { createContext, useContext } from "react";
import { AxiosInstance } from "axios";
import {
  publicAxios,
  authAxios,
  setupPublicAxios,
  setupAuthAxios,
} from "../auth/axios";
import { AxiosProviderProps } from "models/AxiosTypes";

const AxiosContext = createContext(undefined);

export const useAxiosContext = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxiosContext must be used within an AxiosProvider");
  }
  return context;
};

export const AxiosProvider = ({ children }) => {
  const axiosData = {
    publicAxios,
    authAxios,
    setupPublicAxios,
    setupAuthAxios,
  };

  return (
    <AxiosContext.Provider value={axiosData}>{children}</AxiosContext.Provider>
  );
};
