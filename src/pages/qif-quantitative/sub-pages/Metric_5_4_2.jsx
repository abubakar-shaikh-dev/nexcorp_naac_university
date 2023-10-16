import React from "react";
import SelectTag from "../../../components/SelectTag";
import InputTag from "../../../components/InputTag";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Metric_5_4_2() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Metric 5.4.2</span>
          <div className="flex justify-center items-center text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            <span>Not Started</span>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm">Weightage : 5</span>
          <div className="flex flex-col gap-3 justify-between items-end">
            <div className=" flex justify-center items-center gap-3 text-sm text-blue-500 hover:underline cursor-pointer">
              <ArrowDownTrayIcon className="h-4 w-4" />
              <span>Download Approved Supporting Files</span>
            </div>
            <div className=" flex justify-center items-center gap-3 text-sm text-blue-500 hover:underline cursor-pointer">
              <ArrowDownTrayIcon className="h-4 w-4" />
              <span>Download Unapproved Supporting Files</span>
            </div>
          </div>
        </div>

        <span>
          Alumni contribution during the last five years (INR in Lakhs)
          <ul className="pl-6 list-decimal text-sm text-gray-700 space-y-5 mt-5">
            <li>{`>5 Lakhs`}</li>
            <li>4 Lakhs - 5 Lakhs</li>
            <li>3 Lakhs - 4 Lakhs</li>
            <li>1 Lakhs - 3 Lakhs</li>
            <li>{`<1 Lakhs`}</li>
          </ul>
        </span>

        {/* <span className="text-red-500 text-sm">
          Note: Write description of initiatives in not more than 500 words
        </span> */}

        <div>
          <span className="font-semibold">Response:</span>
          <div className="flex flex-col bg-[#f5f8ff] rounded-xl shadow-lg py-5 px-5 my-3">
            <span className="text-lg font-bold text-center my-4">
              School / Department Answers
            </span>
            <span className="my-2 font-semibold">
              Total Schools / Departments : 5
            </span>
            <div className=" flex justify-between my-2 font-semibold">
              <span>Approved / Evaluated : 0</span>
              <span>Merged Schools / Departments : 0</span>
            </div>
            <SelectTag
              name="type-of-teachers"
              label=""
              data={[
                { id: 0, value: "Arts" },
                { id: 1, value: "Commerce" },
                { id: 2, value: "Science" },
                { id: 3, value: "BBA" },
                { id: 4, value: "BCA" },
              ]}
            />

            <div className="my-4 flex gap-6 flex-col">
              <div className="flex justify-center items-center text-white w-28 text-center bg-green-600 px-4 py-1 shadow-sm text-xs rounded-2xl">
                <span>Approved</span>
              </div>

              <div className="flex justify-center items-center text-white w-28 text-center bg-red-600 px-4 py-1 shadow-sm text-xs rounded-2xl">
                <span>Rejected</span>
              </div>
            </div>

            <div className="my-2">
              <span className="font-semibold">Metric Data</span>
              <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
                <span className="font-semibold">Data Template</span>
                <div className="flex text-sm gap-4 justify-start items-center">
                  <DocumentArrowDownIcon className="h-6 w-6" />
                  <a
                    href="./templates/5.4.2 Template.xlsx"
                    className="text-blue-500 underline"
                    download
                  >
                    5.4.2 Template
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="font-semibold">
                Supporting Files of Commerce Department
              </span>

              <div className="flex flex-col my-2 text-sm">
                <div className="flex flex-row">
                  <div className="p-6 w-1/2 border border-gray-400 rounded-tl-md">
                    Upload any additional information
                  </div>
                  <div className="p-6 w-1/2 border border-gray-400 rounded-tr-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <span className="font-semibold">IQAC Answer:</span>
            <span className="mt-5 font-semibold pl-4">Metric Data</span>
            <span className=" pl-4 mt-2">
              Select any one of from the option below:
            </span>

            {/* radio STARTS */}
            <fieldset className="space-y-5 pl-6">
              <div className="select-none  relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="radio1"
                    aria-describedby="comments-description"
                    name="radio"
                    type="radio"
                    className="h-4 w-4 cursor-pointer rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="radio1"
                    className="font-base cursor-pointer text-gray-700"
                  >
                    {`>5 Lakhs`}
                  </label>
                </div>
              </div>

              <div className="select-none  relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="radio2"
                    aria-describedby="comments-description"
                    name="radio"
                    type="radio"
                    className="h-4 w-4 cursor-pointer rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="radio2"
                    className="font-base cursor-pointer text-gray-700"
                  >
                    34 Lakhs - 5 Lakhs
                  </label>
                </div>
              </div>

              <div className="select-none  relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="radio3"
                    aria-describedby="comments-description"
                    name="radio"
                    type="radio"
                    className="h-4 w-4 cursor-pointer rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="radio3"
                    className="font-base cursor-pointer text-gray-700"
                  >
                    3 Lakhs - 4 Lakhs
                  </label>
                </div>
              </div>

              <div className="select-none  relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="radio4"
                    aria-describedby="comments-description"
                    name="radio"
                    type="radio"
                    className="h-4 w-4 cursor-pointer rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="radio4"
                    className="font-base cursor-pointer text-gray-700"
                  >
                    1 Lakhs - 3 Lakhs
                  </label>
                </div>
              </div>

              <div className="select-none  relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="radio4"
                    aria-describedby="comments-description"
                    name="radio"
                    type="radio"
                    className="h-4 w-4 cursor-pointer rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="radio4"
                    className="font-base cursor-pointer text-gray-700"
                  >
                    {`<1 Lakhs`}
                  </label>
                </div>
              </div>
            </fieldset>
            {/* radio ENDS */}

            <span className=" pl-4 mt-2">
              Data Requirement for last five years (year wise):
            </span>
            <ul className="list-decimal text-sm text-gray-700 space-y-5 pl-10">
              <li>Alumni association / Name of the alumnus</li>
              <li>Quantum of contribution</li>
              <li>
                Audited Statement of account of the institution reflecting the
                receipts
              </li>
            </ul>

            <div className="mt-2 pl-4">
              <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
                <span className="font-base">Upload Data Template</span>
                <div className="flex gap-4 text-sm justify-start items-center">
                  <DocumentArrowDownIcon className="h-6 w-6" />
                  <a
                    href="./templates/5.4.2 Template.xlsx"
                    className="text-blue-500 underline"
                    download
                  >
                    5.4.2 Template
                  </a>
                </div>
                <InputTag type="file" name="file-data" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <span className="font-semibold">Supporting Files:</span>

            <span className="text-red-500 text-sm">
              Note: Only PDF, EXCEL, DOC, ZIP and JPEG/PNG files allowed
            </span>

            <div className="flex flex-col my-2 ">
              <div className="flex flex-row">
                <div className="flex justify-between items-center p-6 w-[66.66%] border border-gray-400 rounded-tl-md">
                  <span className="text-sm w-[66.6%]">
                    Upload any additional information
                  </span>
                  <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
                    Merge PDF Files
                  </button>
                </div>
                <div className="p-6 w-1/3 border border-gray-400 rounded-tr-md">
                  <InputTag type="file" name="file1" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-10 mb-3">
            <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
              Save for Draft
            </button>
            <button className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 rounded-md transition-all duration-150">
              <span>Submit for Review</span>
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
