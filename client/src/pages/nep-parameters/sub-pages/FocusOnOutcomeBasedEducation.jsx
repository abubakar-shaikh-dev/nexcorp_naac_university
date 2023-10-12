import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Divider from "../../../components/Divider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FocusOnOutcomeBasedEducation() {
  return (
    <>
      <span className="font-medium">
      5. Focus on Outcome based education (OBE)
      </span>
      <span className="text-red-600 text-sm">
        *Note - Maximum word allowed is 500 words
      </span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <span className="text-base">a) Describe the institutional initiatives to transform its curriculum towards Outcome based Education (OBE)?</span>

      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />

      <Divider />

      <span className="text-base">b) Explain the efforts made by the institution to capture the Outcome based education in teaching and learning practices.</span>

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
      c) Describe any good practice/s of the institution pertaining to the Outcome based education (OBE) in view of NEP 2020.
      </span>

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
