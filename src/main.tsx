import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import StorProvider from "./utils/conextapi/useStore.tsx"; 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StorProvider>
        <App />
      </StorProvider>
    </BrowserRouter>
  </React.StrictMode>
);
