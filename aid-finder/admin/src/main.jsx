import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProider from "./context/DoctorContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorContextProider>
    </AdminContextProvider>
  </BrowserRouter>
);
