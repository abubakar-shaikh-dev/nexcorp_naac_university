import React, { useState } from "react";
import InputTag from "../../../components/InputTag";
import SelectTag from "../../../components/SelectTag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function StatusOfInstitution() {
  return (
    <>
      <span className="font-medium">3. Nature & Type of University</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex gap-7 flex-col">
        <SelectTag
          name="status-of-university"
          label="Status of University"
          data={[
            { id: 0, value: "Accredited" },
            { id: 1, value: "Non-Accredited" },
            { id: 2, value: "Repeat-Accredited" },
          ]}
        />

        <InputTag name="type-of-institution" label="Type Of Institution" />

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
