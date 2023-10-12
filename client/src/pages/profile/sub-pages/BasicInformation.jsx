import { ArrowRightIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";

export default function BasicInformation() {
  return (
    <>
      <span className="font-medium">1. Basic Information</span>

      <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
        Not Started
      </span>

      <form className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <InputTag type="text" name="name" label="Name" />
        <InputTag type="text" name="address" label="Address" />
        <InputTag type="text" name="city" label="City" />
        <InputTag type="text" name="state" label="State" />
        <InputTag type="number" name="pincode" label="Pin Code" />
        <InputTag type="text" name="website" label="Website" />
      </form>

      <div className="flex gap-3 my-5">
        <button className="bg-indigo-500 text-sm  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
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
