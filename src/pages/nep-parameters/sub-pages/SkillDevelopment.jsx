import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Divider from "../../../components/Divider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function SkillDevelopment() {
  return (
    <>
      <span className="font-medium">
      3. Skill development
      </span>
      <span className="text-red-600 text-sm">
        *Note - Maximum word allowed is 500 words
      </span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <span className="text-base">a) Describe the efforts made by the institution to strengthen the vocational education and soft skills of students in alignment with National Skills Qualifications Framework</span>

      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />

      <Divider />

      <span className="text-base">b) Provide the details of the programmes offered to promote vocational education and its integration into mainstream education.</span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />

      <Divider />

      <span className="text-base">
      c) How the institution is providing Value-based education to inculcate positivity amongst the learner that include the development of humanistic, ethical, Constitutional, and universal human values of truth (satya), righteous conduct (dharma), peace (shanti), love(prem), nonviolence (ahimsa), scientific temper, citizenship values, and also life-skills etc.
      </span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />
      <Divider />
      <span className="text-base">d) Enlist the institution's efforts to: i) Design a credit structure to ensure that all students take at least one vocational course before graduating. ii) Engaging the services of Industry veterans and Master Crafts persons to provide vocational skills and overcome gaps vis-a-vis trained faculty provisions. iii) To offer vocational education in ODL/blended/on-campus modular modes to Learners. iv) NSDC association to facilitate all this by creating a unified platform to manage learner enrolment (students and workers), skill mapping, and certification. v) Skilling courses are planned to be offered to students through online and/or distance mode.</span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />
      <Divider />
      <span className="text-base">e) Describe any good practice/s of the institution pertaining to the Skill development in view of NEP 2020.</span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />
      

      <div className="flex gap-3 my-5">
        <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
          Save for Draft
        </button>
        <button className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 rounded-md transition-all duration-150">
          <span>Submit for Review</span>
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </>
  );
}
