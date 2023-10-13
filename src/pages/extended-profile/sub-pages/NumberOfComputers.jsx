import React, { Fragment, useState } from "react";
import {
  DocumentArrowDownIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";

export default function NumberOfComputers() {
  return (
    <>

      <div className="flex justify-between items-end w-full">
        <div>
          <span className="font-medium flex flex-col gap-3">
          4.3. Number Of Computers
          </span>

          <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            Not Started
          </span>
        </div>
      </div>

    <div className="my-4">
      <InputTag type='number' name='number-of-computers' label='Number Of Computers' />
    </div>
     <div className="my-4">
        <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
            <span className="font-medium">Upload Data Template</span>
            <div className="flex gap-4 justify-start items-center">
                <DocumentArrowDownIcon className="h-6 w-6"/>
                <a href="./templates/Extended Profile 4.3 Template.xlsx" className="text-blue-500 underline" download>4.3 Template</a>
            </div>
            <InputTag type='file' name='file-data' />
        </div>
        
     </div>

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
