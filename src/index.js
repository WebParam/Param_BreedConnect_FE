import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./custom.css";

import { GoogleOAuthProvider } from '@react-oauth/google';
AOS.init();

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="206133978470-pg053o3i0c1385k7dfugpcidj7gt1svk.apps.googleusercontent.com">
    <App/>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
