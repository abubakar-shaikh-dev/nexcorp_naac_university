import React, { useState } from "react";
import InputTag from "../../../components/InputTag";
import SelectTag from "../../../components/SelectTag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function StatusOfInstitution() {
  return (
    <>
      <span className="font-medium">9. Furnish the Details of Colleges under University</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="flex gap-7 flex-col">

        <InputTag type="text" name="constituent-colleges" label="Contituent Colleges" />
        <InputTag type="text" name="affiliated-colleges" label="Affiliated Colleges" />
        <InputTag type="text" name="colleges-under-2f" label="Colleges Under 2(f)" />
        <InputTag type="text" name="Colleges Under 12(B)" label="Colleges Under 12(B)" />
        <InputTag type="text" name="naac-accredited-colleges" label="NAAC Accredited Colleges" />
        <InputTag type="text" name="autonomous-colleges" label="Autonomous Colleges" />
        <InputTag type="text" name="colleges-with-postgraduate-departments" label="Colleges with Postgraduate Departments" />
        <InputTag type="text" name="colleges-with-research-departments" label="Colleges with Research Departments" />
        <InputTag type="text" name="university-recognized-research-institutes" label="University Recognized Research Institutes / Centers" />
        <InputTag type="text" name="constituent-colleges" label="Contituent Colleges" />
        <SelectTag
          name="university-offering-programmes"
          label="Is the University Offering any Programmes Recognised by any Statutory Regulatory authority (SRA)"
          data={[
            { id: 0, value: "Yes" },
            { id: 1, value: "No" }
          ]}
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
