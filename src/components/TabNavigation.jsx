import React from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Executive Summary", route: "/executive-summary" },
  { name: "Profile", route: "/profile" },
  { name: "NEP Parameters", route: "/nep-parameters" },
  { name: "Extended Profiles", route: "/extended-profile" },
  { name: "QIF Qualitative", route: "/qif-qualitative" },
  { name: "QIF Quantitative", route: "/qif-quantitative" },
];

function TabNavigation() {
  const location = useLocation();
  const getCurrentPathname = () => {
    return location.pathname;
  };

  const isCurrentPathname = (pathname, currentPathname) => {
    return currentPathname.startsWith(pathname);
  };

  const currentPathname = getCurrentPathname();
  const updatedNavigation = tabs.map((item) => {
    return {
      ...item,
      current: isCurrentPathname(item.route, currentPathname),
    };
  });

  return (
    <>
      <div className="border-b border-gray-200 bg-white py-5 px-5 sm:pb-0">
        <div className="mt-3 sm:mt-4">
          <div className="block overflow-scroll overflow-y-hidden md:overflow-x-auto">
            <nav className="-mb-px flex space-x-8">
              {updatedNavigation.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.route}
                  className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabNavigation;
