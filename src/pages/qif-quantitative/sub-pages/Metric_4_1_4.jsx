import React from "react";
import SelectTag from "../../../components/SelectTag";
import InputTag from "../../../components/InputTag";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Metric_4_1_4() {
  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Metric 4.1.4</span>
          <div className="flex justify-center items-center text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            <span>Not Started</span>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <span className="text-sm">Weightage : 10</span>
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
          Average percentage of expenditure, excluding salary for infrastructure
          augmentation during last five years(INR in Lakhs)
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

              <table className="w-full">
                <tbody>
                  <tr className="text-sm">
                    <td className="p-4 text-center border border-gray-400"></td>
                    <td className="p-4 text-center border border-gray-400">
                      Year 1
                    </td>
                    <td className="p-4 text-center border border-gray-400">
                      Year 2
                    </td>
                    <td className="p-4 text-center border border-gray-400">
                      Year 3
                    </td>
                    <td className="p-4 text-center border border-gray-400">
                      Year 4
                    </td>
                    <td className="p-4 text-center border border-gray-400">
                      Year 5
                    </td>
                  </tr>
                  <tr className="text-sm">
                    <td className="p-4 border border-gray-400">Year</td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response1"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response1"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response1"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response1"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response1"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                  </tr>

                  <tr className="text-sm">
                    <td className="p-4 border border-gray-400">
                      4.1.4.1: Expenditure for infrastructure augmentation,
                      excluding salary during the last five years (INR in lakhs)
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                  </tr>

                  <tr className="text-sm">
                    <td className="p-4 border border-gray-400">
                      Total expenditure excluding Salary
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                    <td className="p-4 border border-gray-400">
                      <InputTag
                        name="response2"
                        placeholder="Response"
                        disabled
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
                <span className="font-semibold">Data Template</span>
                <div className="flex text-sm gap-4 justify-start items-center">
                  <DocumentArrowDownIcon className="h-6 w-6" />
                  <a
                    href="./templates/4.1.4 Template.xlsx"
                    className="text-blue-500 underline"
                    download
                  >
                    4.1.4 Template
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
                  <div className="p-6 w-1/2 border border-gray-400 ">
                    Upload any additional information
                  </div>
                  <div className="p-6 w-1/2 border border-gray-400 "></div>
                </div>

                <div className="flex flex-row">
                  <div className="p-6 w-1/2 border border-gray-400 ">
                    Upload audited utilization statements
                  </div>
                  <div className="p-6 w-1/2 border border-gray-400 "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <span className="font-semibold">IQAC Answer:</span>
            <span className="mt-5 font-semibold">Metric Data</span>

            <table className="w-full">
              <tbody>
                <tr className="text-sm">
                  <td className="p-4 text-center border border-gray-400"></td>
                  <td className="p-4 text-center border border-gray-400">
                    Year 1
                  </td>
                  <td className="p-4 text-center border border-gray-400">
                    Year 2
                  </td>
                  <td className="p-4 text-center border border-gray-400">
                    Year 3
                  </td>
                  <td className="p-4 text-center border border-gray-400">
                    Year 4
                  </td>
                  <td className="p-4 text-center border border-gray-400">
                    Year 5
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="p-4 border border-gray-400">Year</td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response1" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response1" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response1" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response1" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response1" placeholder="Response" />
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="p-4 border border-gray-400">
                    4.1.4.1: Expenditure for infrastructure augmentation,
                    excluding salary during the last five years (INR in lakhs)
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                </tr>
                <tr className="text-sm">
                  <td className="p-4 border border-gray-400">
                  Total expenditure excluding Salary
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                  <td className="p-4 border border-gray-400">
                    <InputTag name="response2" placeholder="Response" />
                  </td>
                </tr>
              </tbody>
            </table>

            <span className=" mt-2">
            Data Requirements for last five years: (As per Data Template)
            </span>
            <ul className="list-decimal text-sm text-gray-700 space-y-5 pl-6">
              <li>Expenditure for infrastructure augmentation</li>
              <li>Total expenditure excluding salary</li>
            </ul>

            <div className="mt-2">
              <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
                <span className="font-base">Upload Data Template</span>
                <div className="flex text-sm gap-4 justify-start items-center">
                  <DocumentArrowDownIcon className="h-6 w-6" />
                  <a
                    href="./templates/4.1.4 Template.xlsx"
                    className="text-blue-500 underline"
                    download
                  >
                    4.1.4 Template
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
                <div className="flex justify-between items-center p-6 w-[66.66%] border border-gray-400 ">
                  <span className="text-sm w-[66.6%]">
                  Upload any additional information
                  </span>
                  <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
                    Merge PDF Files
                  </button>
                </div>
                <div className="p-6 w-1/3 border border-gray-400 ">
                  <InputTag type="file" name="file1" />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex justify-between items-center p-6 w-[66.66%] border border-gray-400 ">
                  <span className="text-sm w-[66.66%]">
                  Upload audited utilization statements
                  </span>
                  <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
                    Merge PDF Files
                  </button>
                </div>
                <div className="p-6 w-1/3 border border-gray-400 ">
                  <InputTag type="file" name="file2" />
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
