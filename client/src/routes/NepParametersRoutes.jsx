import { Routes, Route, Navigate } from 'react-router-dom';
import NepParameters from '../pages/nep-parameters/NepParameters';

// Sub Pages of NEP Parameters Page
import Multidisciplinary from "../pages/nep-parameters/sub-pages/Multidisciplinary";
import AcademicBankOfCredits from "../pages/nep-parameters/sub-pages/AcademicBankOfCredits";
import SkillDevelopment from "../pages/nep-parameters/sub-pages/SkillDevelopment";
import AppropriateIntegrationOfIndianKnowledgeSystem from "../pages/nep-parameters/sub-pages/AppropriateIntegrationOfIndianKnowledgeSystem";
import FocusOnOutcomeBasedEducation from "../pages/nep-parameters/sub-pages/FocusOnOutcomeBasedEducation";
import DistanceEducation from "../pages/nep-parameters/sub-pages/DistanceEducation";

export default function NepParametersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/nep-parameters/multidisciplinary" />} />
      <Route path="multidisciplinary" element={<NepParameters><Multidisciplinary /></NepParameters>} />
      <Route path="academic-bank-of-credits" element={<NepParameters><AcademicBankOfCredits /></NepParameters>} />
      <Route path="skill-development" element={<NepParameters><SkillDevelopment /></NepParameters>} />
      <Route path="appropriate-integration-of-indian-knowledge-system" element={<NepParameters><AppropriateIntegrationOfIndianKnowledgeSystem /></NepParameters>} />
      <Route path="focus-on-outcome-based-education" element={<NepParameters><FocusOnOutcomeBasedEducation /></NepParameters>} />
      <Route path="distance-education" element={<NepParameters><DistanceEducation /></NepParameters>} />
    </Routes>
  );
}
