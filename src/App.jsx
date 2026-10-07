import { Navigate, Route, Routes } from "react-router-dom";
import AllProjects from "./AllProjects";
import { CertificationsPage, PromptsPage, RitualPage } from "./BoardPages";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/vault" element={<Navigate to="/certifications" replace />} />
      <Route path="/prompts" element={<PromptsPage />} />
      <Route path="/ritual" element={<RitualPage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/all-projects" element={<Navigate to="/projects" replace />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
