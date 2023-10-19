import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SelectTag from "../../../components/SelectTag";

export default function SourceOfFunding() {
  return (
    <>
      <span className="font-medium">6. University with Potential for Excellence</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex flex-col gap-6">

        <SelectTag name='university-recognized' label='Is the University Recognized as a University with Potential for Excellence (UPE) by the UGC?' data={[
            { id: 0, value: "Yes" },
            { id: 1, value: "No" },
        ]} />

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
