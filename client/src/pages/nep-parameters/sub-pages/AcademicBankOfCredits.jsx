import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Divider from "../../../components/Divider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AcademicBankOfCredits() {
  return (
    <>
      <span className="font-medium">
      2. Academic bank of credits (ABC)
      </span>
      <span className="text-red-600 text-sm">
        *Note - Maximum word allowed is 500 words
      </span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <span className="text-base">a) Describe the initiatives taken by the institution to fulfil the requirement of Academic bank of credits as proposed in NEP 2020.</span>

      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />

      <Divider />

      <span className="text-base">b) Whether the institution has registered under the ABC to permit its learners to avail the benefit of multiple entries and exit during the chosen programme? Provide details.</span>

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
      c) Describe the efforts of the institution for seamless collaboration, internationalization of education, joint degrees between Indian and foreign institutions, and to enable credit transfer.
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
      <span className="text-base">d) How faculties are encouraged to design their own curricular and pedagogical approaches within the approved framework, including textbook, reading material selections, assignments, and assessments etc.</span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />
      <Divider />
      <span className="text-base">e) Describe any good practice/s of the institution pertaining to the implementation of Academic bank of credits (ABC) in the institution in view of NEP 2020.</span>

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
