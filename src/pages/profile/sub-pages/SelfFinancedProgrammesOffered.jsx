import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";

export default function SelfFinancedProgrammesOffered() {
  return (
    <>
      <span className="font-medium">14. Self Financed Programmes Offered & New Programmes introduced during the Last 5 years</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex flex-col gap-6">



      <InputTag type='number' name='self-financed' label='Total Self Financed Programmes Offered' />
      <InputTag type='number' name='new-programmes' label='Total New Programmes Introduced During the Last 5 Years' />

        <div className="flex gap-3 my-5">
          <button className="bg-indigo-500 text-sm  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
            Save for Draft
          </button>
          <button className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 rounded-md transition-all duration-150">
            <span>Submit for Review</span>
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </form>
    </>
  );
}
