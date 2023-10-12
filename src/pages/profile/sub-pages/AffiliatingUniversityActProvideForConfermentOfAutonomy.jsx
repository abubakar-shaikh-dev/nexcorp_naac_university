import React, { useState } from "react";
import InputTag from "../../../components/InputTag";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SelectTag from "../../../components/SelectTag";

export default function AffiliatingUniversityActProvideForConfermentOfAutonomy() {
  const [other, setOther] = useState(false);

  return (
    <>
      <span className="font-medium">10. Affiliating University ACT provide for conferment of autonomy</span>
      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form>
        <div className="sm:col-span-6">
          <label
            htmlFor='conferment-of-autonomy'
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Does the Affiliating University Act Provide for conferment of Autonomy (As Recognized by the UGC), on its affiliated colleges?
          </label>
          <div className="flex  flex-col gap-6 mt-1 sm:col-span-2 ">
            <select
              id='conferment-of-autonomy'
              name='conferment-of-autonomy'
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={"default"}
              onChange={(e)=>{
                e.target.value === 'Yes' ? setOther(true) : setOther(false)
              }}
            >
              <option disabled value="default">
                Select Option
              </option>

              
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              
            </select>

            {other && <SelectTag name='autonomous-status' label='Autonomous Status' data={[
                {id:0,value:'Yes'},
                {id:1,value:'No'}
            ]}/>}
          
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
