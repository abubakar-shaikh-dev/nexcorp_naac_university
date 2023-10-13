import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import "./custom.css"
// Pages
import ExecutiveSummary from "./pages/executive-summary/ExecutiveSummary";
import QifQualitative from "./pages/qif-qualitative/QifQualitative";
import QifQuantitative from "./pages/qif-quantitative/QifQuantitative";

//Routes
import ProfileRoutes from "./routes/ProfileRoutes";
import NepParametersRoutes from "./routes/NepParametersRoutes";
import ExtendedProfileRoutes from "./routes/ExtendedProfileRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/executive-summary'/>} />
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/profile/*" element={<ProfileRoutes />} />
          <Route path="/nep-parameters/*" element={<NepParametersRoutes />} />
          <Route path="/extended-profile/*" element={<ExtendedProfileRoutes />} />
          <Route path="/qif-qualitative" element={<QifQualitative />} />
          <Route path="/qif-quantitative" element={<QifQuantitative />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
