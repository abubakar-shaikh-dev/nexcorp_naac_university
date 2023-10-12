import { Link,useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const getCurrentPathname = () => {
  const location = useLocation();
  return location.pathname;
};

const isCurrentPathname = (pathname, currentPathname) => {
  return pathname === currentPathname
};

export default function Stepper(props) {

  const currentPathname = getCurrentPathname();
  const updatedSteps = props.data.map((item) => {
    return {
      ...item,
      current: isCurrentPathname(item.href, currentPathname),
    };
  });

  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="select-none flex items-center justify-start md:justify-center overflow-scroll overflow-y-hidden xl:overflow-x-hidden py-4"
      >
        {updatedSteps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== updatedSteps.length - 1 ? "pr-4 sm:pr-4" : "",
              "relative"
            )}
          >
            {step.current === true ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <Link
                  to={step.href}
                  className="relative flex h-8 w-8 items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full border-2 border-gray-800 hover:border-gray-900 transition-all duration-100"
                  aria-current="step"
                >
                  <span className="text-white">{step.id}</span>
                </Link>
              </>
            ) : step.status === "approved" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-green-400" />
                </div>
                <Link
                  to={step.href}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-500 hover:bg-gray-700"
                >
                  <span className="text-white">{step.id}</span>
                </Link>
              </>
            ) : step.status === "draft" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-blue-200" />
                </div>
                <Link
                  to={step.href}
                  className="relative flex h-8 w-8 items-center justify-center bg-blue-400 hover:bg-gray-700 rounded-full border-2 border-blue-400 hover:border-gray-700 transition-all duration-100"
                  aria-current="step"
                >
                  <span className="text-white">{step.id}</span>
                </Link>
              </>
            ) : step.status === "rejected" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-red-200" />
                </div>
                <Link
                  to={step.href}
                  className="relative flex h-8 w-8 items-center justify-center bg-red-500 hover:bg-gray-700 rounded-full border-2 border-red-500 hover:border-gray-700 transition-all duration-100"
                  aria-current="step"
                >
                  <span className="text-white">{step.id}</span>
                </Link>
              </>
            ) : step.status === "submitted" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-orange-200" />
                </div>
                <Link
                  to={step.href}
                  className="relative flex h-8 w-8 items-center justify-center bg-orange-400 hover:bg-gray-700 rounded-full border-2 border-orange-400 hover:border-gray-700 transition-all duration-100"
                  aria-current="step"
                >
                  <span className="text-white">{step.id}</span>
                </Link>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <Link
                  to={step.href}
                  // className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500"
                  className="group text-gray-300 hover:text-white relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 hover:bg-gray-700 bg-white hover:border-gray-700 transition-all duration-100"
                >
                  <span>
                  {/* <span className="text-white"> */}
                    {step.id}
                  </span>
                </Link>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
