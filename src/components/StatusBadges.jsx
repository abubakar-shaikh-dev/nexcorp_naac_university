import React from "react";

export default function StatusBadges() {
  return (
    <>
      <div className="flex justify-start gap-4 my-4 text-sm flex-wrap md:flex-row">
        <div className="flex items-center">
          <div className="bg-gray-500 w-3 h-3  rounded-full mr-2"></div>
          <span>In Progress</span>
        </div>
        <div className="flex  items-center">
          <div className="bg-blue-500 w-3 h-3  rounded-full mr-2"></div>
          <span>In Draft</span>
        </div>
        <div className="flex  items-center">
          <div className="bg-red-500 w-3 h-3  rounded-full mr-2"></div>
          <span>Rejected</span>
        </div>
        <div className="flex  items-center">
          <div className="bg-orange-500 w-3 h-3  rounded-full mr-2"></div>
          <span>Submitted</span>
        </div>
        <div className="flex  items-center">
          <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
          <span>Approved</span>
        </div>
      </div>
    </>
  );
}
