import { Navigate, Route, Routes } from "react-router-dom";
import AllProjects from "./AllProjects";
import { PromptsPage, RitualPage, VaultPage } from "./BoardPages";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vault" element={<VaultPage />} />
      <Route path="/prompts" element={<PromptsPage />} />
      <Route path="/ritual" element={<RitualPage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/all-projects" element={<Navigate to="/projects" replace />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
