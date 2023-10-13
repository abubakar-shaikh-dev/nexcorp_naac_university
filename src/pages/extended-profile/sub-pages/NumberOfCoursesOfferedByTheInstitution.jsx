import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  TrashIcon,
  PencilSquareIcon,
  XMarkIcon,
  DocumentArrowDownIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";
import SelectTag from "../../../components/SelectTag";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function NumberOfCoursesOfferedByTheInstitution() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* ADD MODAL START  */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add Details
                      </Dialog.Title>
                    </div>
                  </div>

                  <div className="mx-2 my-6 flex flex-col gap-6">
                    

                    <InputTag
                      type="number"
                      name="year"
                      label="Year"
                    />

                    <InputTag
                      type="number"
                      name="number"
                      label="Number"
                    />

                    
                  </div>

                  <div className="mt-5  mx-2 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Add Data
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* ADD MODAL END  */}

      <div className="flex justify-between items-end w-full">
        <div>
          <span className="font-medium flex flex-col gap-3">
          1.1. Number of courses offered by the Institution across all programs during the last five years
          </span>

          <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            Not Started
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="flex justify-center h-9 text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-6 py-2 rounded-md transition-all duration-150"
          onClick={() => setOpen(true)}
        >
          <span>Add New Rows</span>
          <PlusIcon className="h-4 w-4 ml-2" />
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-0 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-0.5">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">

                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Year
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Number
                      </th>
                      

                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Action
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr
                        key={person.email}
                        className="divide-x divide-gray-200"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.name}
                        </td>


                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {person.title}
                        </td>
                        
                        <td className="flex gap-10 whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                          <TrashIcon className="h-5 w-5  text-red-600 hover:text-red-900 cursor-pointer" />
                          <PencilSquareIcon className="h-5 w-5 text-indigo-600 hover:text-indigo-900 cursor-pointer" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div className="my-4">
     <div className=" py-3 flex gap-4 flex-col sm:w-1/2 md:w-1/3">
            <span className="font-medium">Upload Data Template</span>
            <div className="flex gap-4 justify-start items-center">
                <DocumentArrowDownIcon className="h-6 w-6"/>
                <a href="../templates/Extended Profile 1.1 Template.xlsx" className="text-blue-500 underline" download>1.1 Template</a>
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
