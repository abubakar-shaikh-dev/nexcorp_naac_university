import React, { useState } from "react";
import Navigation from "../../components/partials/Navigation";
import TabNavigation from "../../components/TabNavigation";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Divider from "../../components/Divider";
import StatusBadges from "../../components/StatusBadges";

export default function ExecutiveSummary() {
  const [data, setData] = useState({
    introductory_note: "",
    criterion_wise_summary: "",
    strength_weaknesses_opportunities_and_challenges: "",
    additional_information: "",
    over_all_conclusive_explication: "",
  });

  const onClickSubmit = () => {
    console.log("submit data", data);
  };

  const onClickDraft = () => {
    console.log("Draft data", data);
  };

  return (
    <>
      <Navigation />
      <TabNavigation />
      <div className="shadow-xl p-5 my-10 mx-5 bg-white">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between flex-col items-start md:flex-row md:items-center">
            <h1 className="font-bold text-xl">Executive Summary</h1>
            <StatusBadges />
          </div>

          <div className="flex justify-end gap-4 text-sm">
            <div className="flex justify-center gap-3 items-center">
              <span className="font-semibold">Status of the Application</span>
              <div className="bg-green-500 px-4 py-1 text-white rounded-full mr-2 shadow-md">
                Approved
              </div>
            </div>
          </div>

          <span className="font-medium">
            Every HEI applying for the A&A process shall prepare an Executive
            Summary highlighting the main features of the Institution including
          </span>
          <span className="text-red-600 text-sm">
            *Note - Maximum word allowed is 5000 word
          </span>
          <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            Not Started
          </span>

          <span className="text-sm">Introductory Note:</span>

          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setData((prevValue) => {
                return {
                  ...prevValue,
                  introductory_note: editor.getData(),
                };
              });
            }}
          />

          <Divider />

          <span className="text-base">Criterion-wise Summary:</span>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              setData((prevValue) => {
                return {
                  ...prevValue,
                  criterion_wise_summary: editor.getData(),
                };
              });
            }}
          />

          <Divider />

          <span className="text-sm">
            Strength Weaknesses Opportunities and Challenges (SWOC):
          </span>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              setData((prevValue) => {
                return {
                  ...prevValue,
                  strength_weaknesses_opportunities_and_challenges:
                    editor.getData(),
                };
              });
            }}
          />
          <Divider />
          <span className="text-sm">Any additional information:</span>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              setData((prevValue) => {
                return {
                  ...prevValue,
                  additional_information: editor.getData(),
                };
              });
            }}
          />
          <Divider />
          <span className="text-sm">Over all conclusive explication:</span>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              setData((prevValue) => {
                return {
                  ...prevValue,
                  over_all_conclusive_explication: editor.getData(),
                };
              });
            }}
          />

          <div className="flex gap-3 my-5">
            <button
              className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150"
              onClick={onClickDraft}
            >
              Save for Draft
            </button>
            <button
              className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 rounded-md transition-all duration-150"
              onClick={onClickSubmit}
            >
              <span>Submit for Review</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
