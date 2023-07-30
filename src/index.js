import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupAuthAxios, setupPublicAxios } from "setup/auth/axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
setupPublicAxios(process.env.REACT_APP_BASE_URL);
setupAuthAxios(process.env.REACT_APP_BASE_URL, localStorage.jwt_token);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
