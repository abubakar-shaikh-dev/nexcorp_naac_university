import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SelectTag from "../../../components/SelectTag";

export default function TypeOfInstitution() {
  return (
    <>
      <span className="font-medium">4. Type of Institution</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex flex-col gap-6">

        <SelectTag name='gender' label='By Gender' data={[
            { id: 0, value: "For Men" },
            { id: 1, value: "For Women" },
            { id: 2, value: "Co-Education" },
        ]} />

        <SelectTag name='shift' label='By Shift' data={[
            { id: 0, value: "Regular" },
            { id: 1, value: "Day" },
            { id: 2, value: "Evening" },
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
