import React, { useState } from "react";
import InputTag from "../../../components/InputTag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function StatusOfInstitution() {
  const [other, setOther] = useState(false);

  return (
    <>
      <span className="font-medium">3. Status of Institution</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form>
        <div className="sm:col-span-6">
          <label
            htmlFor='status-of-institution'
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Please select the status of Institution
          </label>
          <div className="flex  flex-col gap-6 mt-1 sm:col-span-2 ">
            <select
              id='status-of-institution'
              name='status-of-institution'
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={"default"}
              onChange={(e)=>{
                e.target.value === 'Other' ? setOther(true) : setOther(false)
              }}
            >
              <option disabled value="default">
                Select Option
              </option>

              
                <option value='Affiliated College'>Affiliated College</option>
                <option value='Constituent College'>Constituent College</option>
                <option value='Other'>Other</option>
              
            </select>

            {other && <InputTag type='text' name='status-of-institution-manual' label='Other (Please Specify)'/>}
          
          </div>
        </div>

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
