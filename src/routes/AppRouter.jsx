import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SalesDemo from "../pages/SalesDemo";
import TurnosDemo from "../pages/TurnosDemo";
import CrmDemo from "../pages/CrmDemo";
import WebDemo from "../pages/WebDemo";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventas" element={<SalesDemo />} />
        <Route path="/turnos" element={<TurnosDemo />} />
        <Route path="/crm" element={<CrmDemo />} />
        <Route path="/desarrollo-web" element={<WebDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;