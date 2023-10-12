import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";

export default function UnitCost() {
  return (
    <>
      <span className="font-medium">
      21. Please fill in the following details if applicable (Unit cost = total annual recurring expenditure (actual) divided by total number of students enrolled )
      </span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex flex-col gap-6">
        <InputTag
          type="number"
          name="unit-cost-education"
          label="Unit Cost of Education"
        />

        <InputTag
          type="number"
          name="including-salary-component"
          label="Including Salary Component"
        />

        <InputTag
          type="number"
          name="excluding-salary-component"
          label="Excluding Salary Component"
        />

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
