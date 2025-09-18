import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login.tsx";
import { Register } from "./components/Register.tsx";
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
   {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },

]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
