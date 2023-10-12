import { Routes, Route, Navigate } from 'react-router-dom';
import ExtendedProfile from '../pages/extended-profile/ExtendedProfile';

// Sub Pages of Extended Profile Page
import NumberOfCoursesOfferedByTheInstitution from "../pages/extended-profile/sub-pages/NumberOfCoursesOfferedByTheInstitution";
import NumberOfStudentsYearWise from "../pages/extended-profile/sub-pages/NumberOfStudentsYearWise";
import NumberOfSeatsEarmarkedForReservedCategory from "../pages/extended-profile/sub-pages/NumberOfSeatsEarmarkedForReservedCategory";
import NumberOfOutgoingStudents from "../pages/extended-profile/sub-pages/NumberOfOutgoingStudents";
import NumberOfFullTimeTeachers from "../pages/extended-profile/sub-pages/NumberOfFullTimeTeachers";
import NumberOfSanctionedPosts from "../pages/extended-profile/sub-pages/NumberOfSanctionedPosts";
import TotalNumberOfClassroomsAndSeminarHalls from "../pages/extended-profile/sub-pages/TotalNumberOfClassroomsAndSeminarHalls";
import TotalExpenditureExcludingSalary from "../pages/extended-profile/sub-pages/TotalExpenditureExcludingSalary";
import NumberOfComputers from "../pages/extended-profile/sub-pages/NumberOfComputers";

export default function ExtendedProfileRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/extended-profile/number-of-courses-offered-by-the-institution" />} />
      <Route path="number-of-courses-offered-by-the-institution" element={<ExtendedProfile><NumberOfCoursesOfferedByTheInstitution /></ExtendedProfile>} />
      <Route path="number-of-students-year-wise" element={<ExtendedProfile><NumberOfStudentsYearWise /></ExtendedProfile>} />
      <Route path="number-of-seats-earmarked-for-reserved-category" element={<ExtendedProfile><NumberOfSeatsEarmarkedForReservedCategory /></ExtendedProfile>} />
      <Route path="number-of-outgoing-students" element={<ExtendedProfile><NumberOfOutgoingStudents /></ExtendedProfile>} />
      <Route path="number-of-full-time-teachers" element={<ExtendedProfile><NumberOfFullTimeTeachers /></ExtendedProfile>} />
      <Route path="number-of-sanctioned-posts" element={<ExtendedProfile><NumberOfSanctionedPosts /></ExtendedProfile>} />
      <Route path="total-number-of-classrooms-and-seminar-halls" element={<ExtendedProfile><TotalNumberOfClassroomsAndSeminarHalls /></ExtendedProfile>} />
      <Route path="total-expenditure-excluding-salary" element={<ExtendedProfile><TotalExpenditureExcludingSalary /></ExtendedProfile>} />
      <Route path="number-of-computers" element={<ExtendedProfile><NumberOfComputers /></ExtendedProfile>} />
    </Routes>
  );
}
