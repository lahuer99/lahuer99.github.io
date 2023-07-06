import React from "react";

const Career = () => {
  return (
    <div
      className="mx-auto max-w-screen-xl h-screen flex flex-col justify-center my-7 snap-center font-mono"
      id="career"
    >
      <div className="text-gray-900 font-semibold text-4xl mx-auto uppercase">
        Career
      </div>
      <p className="text-center text-purple-700 font-extrabold text-3xl my-0 py-0">
        ____
      </p>
      <table className="max-w-4xl mx-auto my-9">
        <tbody>
          <tr className="border-b my-3">
            <td className="align-top w-3/6 font-medium text-lg px-8">
              <span className="text-3xl font-medium whitespace-nowrap">
                Analyst
              </span>{" "}
              - Deloitte USI
              <span className="text-green-700 whitespace-nowrap">.</span>
              <div className="text-xs">JUL '21 - DEC '22</div>
            </td>
            <td className="w-4/6">
              <div className="flex flex-col align-top">
                <div>
                  Worked as{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    developer
                  </span>{" "}
                  ,for Michigan Bridges, the{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    healthcare portal
                  </span>{" "}
                  for the State of Michigan, - on the analysis, design and
                  development of multiple features for their case worker
                  portal.Features included{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    automating
                  </span>{" "}
                  various case worker tasks, defect{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    fixes
                  </span>
                  , report creation and{" "}
                  <span className="text-purple-700 whitespace-nowrap">UI</span>{" "}
                  changes.Rewarded with multiple{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    Spot Awards
                  </span>{" "}
                  and Shoutouts for timely delivery of quality features passing
                  UT,SIT and UAT test cases.
                </div>
                <div>
                  <ul className="list-disc flex flex-row">
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      Java
                    </li>
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      J2EE
                    </li>
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      Javascript
                    </li>
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      Oracle SQL
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <tr className="border-b my-3">
            <td className="align-top w-3/6 font-medium text-lg px-8">
              B. Tech -{" "}
              <span className="text-2xl font-medium whitespace-nowrap">
                NIT Calicut
              </span>
              <div className="text-xs">JUL '17 - MAY '21</div>
            </td>
            <td className="w-4/6">
              <div className="flex flex-col align-top">
                <div>
                  Completed my B.Tech in{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    Computer Science
                  </span>{" "}
                  & Engineering, graduating with a{" "}
                  <span className="text-purple-700 whitespace-nowrap">
                    CGPA</span> of <span className="text-purple-700 whitespace-nowrap">7.05</span>
                </div>
                <div>
                  <ul className="list-disc flex flex-row">
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      DSA
                    </li>
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      DBMS
                    </li>
                    <li className="mx-4 font-sans font-thin text-zinc-900 text-lg">
                      Computer Geometry
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Career;
