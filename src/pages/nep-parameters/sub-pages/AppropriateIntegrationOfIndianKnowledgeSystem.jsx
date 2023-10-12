import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Divider from "../../../components/Divider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AppropriateIntegrationOfIndianKnowledgeSystem() {
  return (
    <>
      <span className="font-medium">
      4. Appropriate integration of Indian Knowledge system (teaching in Indian Language, culture, using online course)
      </span>
      <span className="text-red-600 text-sm">
        *Note - Maximum word allowed is 500 words
      </span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <span className="text-base">a) Delineate the strategy and details regarding the integration of the Indian Knowledge system (teaching in Indian Language, culture etc,) into the curriculum using both offline and online courses.</span>

      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />

      <Divider />

      <span className="text-base">b) What are the institutions plans to train its faculties to provide the classroom delivery in bilingual mode (English and vernacular)? Provide the details.</span>

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
      c) Provide the details of the degree courses taught in Indian languages and bilingually in the institution.
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
      <span className="text-base">d) Describe the efforts of the institution to preserve and promote the following: i) Indian languages (Sanskrit, Pali, Prakrit and classical, tribal and endangered etc.) ii) Indian ancient traditional knowledge iii) Indian Arts iv) Indian Culture and traditions.</span>

      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
      />
      <Divider />
      <span className="text-base">e) Describe any good practice/s of the institution pertaining to the appropriate integration of Indian Knowledge system (teaching in Indian Language, culture, using online course) in view of NEP 2020.</span>

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
