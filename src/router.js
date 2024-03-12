import { createBrowserRouter } from "react-router-dom";

import Principal from "./pages/Principal";

/* - Páginas default ---------- */
import Home from "./pages/default/Home";
import Descobrir from "./pages/default/Discover";
import Espaco from "./pages/default/Space";
import Grupos from "./pages/default/Groups";
import Mensagens from "./pages/default/Messages";
import Configs from "./pages/user/Profile";

/* - Páginas autenticação ---------- */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/forgotPassword";


const routers = createBrowserRouter([
    { path: "/", element: <Principal /> },

    /* - Páginas default ---------- */
    { path: "/inicio", element: <Home /> },
    { path: "/descobrir", element: <Descobrir /> },
    { path: "/meu-espaco", element: <Espaco /> },
    { path: "/grupos", element: <Grupos /> },
    { path: "/mensagens", element: <Mensagens /> },
    { path: "/configurações", element: <Configs /> },

    /* - Páginas autenticação ---------- */
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot", element: <Forgot /> },

]);

export default routers;