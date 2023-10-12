import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from '../pages/profile/Profile';

// Sub Pages of Profile Page
import BasicInformation from "../pages/profile/sub-pages/BasicInformation";
import ForCommunicaton from "../pages/profile/sub-pages/ForCommunicaton";
import StatusOfInstitution from "../pages/profile/sub-pages/StatusOfInstitution";
import TypeOfInstitution from "../pages/profile/sub-pages/TypeOfInstitution";
import MinorityRecognition from "../pages/profile/sub-pages/MinorityRecognition";
import SourceOfFunding from "../pages/profile/sub-pages/SourceOfFunding";
import DateOfEstablishmentAndAffiliationDetails from "../pages/profile/sub-pages/DateOfEstablishmentAndAffiliationDetails";
import DetailsOfUcgRecognition from "../pages/profile/sub-pages/DetailsOfUcgRecognition";
import DetailsOfRecognition from "../pages/profile/sub-pages/DetailsOfRecognition";
import AffiliatingUniversityActProvideForConfermentOfAutonomy from "../pages/profile/sub-pages/AffiliatingUniversityActProvideForConfermentOfAutonomy";
import PotentialForExcellenceRecognition from "../pages/profile/sub-pages/PotentialForExcellenceRecognition";
import LocationOfTheCampusAndArea from "../pages/profile/sub-pages/LocationOfTheCampusAndArea";
import ProgrammesOfferedByCollege from "../pages/profile/sub-pages/ProgrammesOfferedByCollege";
import SelfFinancedProgrammesOffered from "../pages/profile/sub-pages/SelfFinancedProgrammesOffered";
import ListOfDepartments from "../pages/profile/sub-pages/ListOfDepartments";
import PositionsInTheInstitution from "../pages/profile/sub-pages/PositionsInTheInstitution";
import QualificationsOfTheTeachingStaff from "../pages/profile/sub-pages/QualificationsOfTheTeachingStaff";
import NumberOfVisitingFaculty from "../pages/profile/sub-pages/NumberOfVisitingFaculty";
import FurnishTheNumberOfTheStudentsAdmittedToTheCollege from "../pages/profile/sub-pages/FurnishTheNumberOfTheStudentsAdmittedToTheCollege";
import DetailsOnStudentsEnrollment from "../pages/profile/sub-pages/DetailsOnStudentsEnrollment";
import UnitCost from "../pages/profile/sub-pages/UnitCost";
import DateOfAccreditation from "../pages/profile/sub-pages/DateOfAccreditation";
import DateOfEstablishmentOfInternalQualityAssurance from "../pages/profile/sub-pages/DateOfEstablishmentOfInternalQualityAssurance";
import DetailsRegardingSubmissionOfAnnualQualityAssuranceReports from "../pages/profile/sub-pages/DetailsRegardingSubmissionOfAnnualQualityAssuranceReports";

export default function ProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile/basic-information" />} />
      <Route path="basic-information" element={<Profile><BasicInformation /></Profile>} />
      <Route path="for-communication" element={<Profile><ForCommunicaton /></Profile>} />
      <Route path="status-of-institution" element={<Profile><StatusOfInstitution /></Profile>} />
      <Route path="type-of-institution" element={<Profile><TypeOfInstitution /></Profile>} />
      <Route path="minority-recognition" element={<Profile><MinorityRecognition /></Profile>} />
      <Route path="source-of-funding" element={<Profile><SourceOfFunding /></Profile>} />
      <Route path="date-of-establishment-and-affiliation-details" element={<Profile><DateOfEstablishmentAndAffiliationDetails /></Profile>} />
      <Route path="details-of-ucg-recognition" element={<Profile><DetailsOfUcgRecognition /></Profile>} />
      <Route path="details-of-recognition" element={<Profile><DetailsOfRecognition /></Profile>} />
      <Route path="affiliating-university-act-provide-for-conferment-of-autonomy" element={<Profile><AffiliatingUniversityActProvideForConfermentOfAutonomy /></Profile>} />
      <Route path="potential-for-excellence-recognition" element={<Profile><PotentialForExcellenceRecognition /></Profile>} />
      <Route path="location-of-the-campus-and-area" element={<Profile><LocationOfTheCampusAndArea /></Profile>} />
      <Route path="programmes-offered-by-college" element={<Profile><ProgrammesOfferedByCollege /></Profile>} />
      <Route path="self-financed-programmes-offered" element={<Profile><SelfFinancedProgrammesOffered /></Profile>} />
      <Route path="list-of-departments" element={<Profile><ListOfDepartments /></Profile>} />
      <Route path="positions-in-the-institution" element={<Profile><PositionsInTheInstitution /></Profile>} />
      <Route path="qualifications-of-the-teaching-staff" element={<Profile><QualificationsOfTheTeachingStaff /></Profile>} />
      <Route path="number-of-visiting-faculty" element={<Profile><NumberOfVisitingFaculty /></Profile>} />
      <Route path="number-of-students-admitted" element={<Profile><FurnishTheNumberOfTheStudentsAdmittedToTheCollege /></Profile>} />
      <Route path="details-on-students-enrollment" element={<Profile><DetailsOnStudentsEnrollment /></Profile>} />
      <Route path="unit-cost" element={<Profile><UnitCost /></Profile>} />
      <Route path="date-of-accreditation" element={<Profile><DateOfAccreditation /></Profile>} />
      <Route path="date-of-establishment-of-internal-quality-assurance" element={<Profile><DateOfEstablishmentOfInternalQualityAssurance /></Profile>} />
      <Route path="details-regarding-submission-of-annual-quality-assurance-reports" element={<Profile><DetailsRegardingSubmissionOfAnnualQualityAssuranceReports /></Profile>} />
    </Routes>
  );
}
