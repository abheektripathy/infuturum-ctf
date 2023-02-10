import Header from "@/components/header";
import React from "react";

const Timeline: React.FC = () => {


  return (
    <>

<div className="navbar bg-black">
  <div className="flex-1">
  <a className="text-white text-xl md:text-xl lg:text-xl xl:text-xl font-bold font-poppins text-center ml-5" style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href ="/about "className="font-mono">DOCS</a></li>

      <li><a href = "https://airtable.com/shrJSqLbcUseAb3JG" className="font-mono">REGISTER</a></li>
    </ul>
  </div>
</div>
      <div className="flex flex-col pt-44 xs:pt-64 md:pt-0 lg:pt-0 xl:pt-0 bg-black">
        <div className="relative h-screen w-screen min-h-full  bg-black">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="ml-10 mr-10">
              <ol className="border-l border-gray-300">
                <li>
                  <div className="flex flex-start items-center pt-3">
                    <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                    <p className="text-white text-sm">01.07.2021</p>
                  </div>
                  <div className="mt-0.5 ml-4 mb-6">
                    <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                      fishHunt
                    </h4>
                    <p className="text-gray-500 mb-3">
                      TLDRThe Purpose: Intentional Random Connections was an
                      invitation to connect across divisions, timezones, and
                      geographies across 90+ countries. The Outcomes: Abundant
                      Creativity! In total we had 38 sessions hosted over 24
                      hours (both synchronous and asynchronous) Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Quisque
                      scelerisque diam non nisi semper, et elementum lorem
                      ornare. Maecenas placerat facilisis mollis. Duis sagittis
                      ligula in sodales vehicula.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-start items-center pt-3">
                    <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                    <p className="text-white text-sm">01.07.2021</p>
                  </div>
                  <div className="mt-0.5 ml-4 mb-6">
                    <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                      Re-sem
                    </h4>
                    <p className="text-gray-500 mb-3">
                      TLDRThe Purpose: Intentional Random Connections was an
                      invitation to connect across divisions, timezones, and
                      geographies across 90+ countries. The Outcomes: Abundant
                      Creativity! In total we had 38 sessions hosted over 24
                      hours (both synchronous and asynchronous) Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Quisque
                      scelerisque diam non nisi semper, et elementum lorem
                      ornare. Maecenas placerat facilisis mollis. Duis sagittis
                      ligula in sodales vehicula.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-start items-center pt-3">
                    <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                    <p className="text-white text-sm">01.07.2021</p>
                  </div>
                  <div className="mt-0.5 ml-4 mb-6">
                    <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                      HackerHouse
                    </h4>
                    <p className="text-gray-500 mb-3">
                      TLDRThe Purpose: Intentional Random Connections was an
                      invitation to connect across divisions, timezones, and
                      geographies across 90+ countries. The Outcomes: Abundant
                      Creativity! In total we had 38 sessions hosted over 24
                      hours (both synchronous and asynchronous) Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Quisque
                      scelerisque diam non nisi semper, et elementum lorem
                      ornare. Maecenas placerat facilisis mollis. Duis sagittis
                      ligula in sodales vehicula.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-start items-center pt-3">
                    <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                    <p className="text-white text-sm">01.07.2021</p>
                  </div>
                  <div className="mt-0.5 ml-4 mb-6">
                    <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                      YourMom
                    </h4>
                    <p className="text-gray-500 mb-3">
                      TLDRThe Purpose: Intentional Random Connections was an
                      invitation to connect across divisions, timezones, and
                      geographies across 90+ countries. The Outcomes: Abundant
                      Creativity! In total we had 38 sessions hosted over 24
                      hours (both synchronous and asynchronous) Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Quisque
                      scelerisque diam non nisi semper, et elementum lorem
                      ornare. Maecenas placerat facilisis mollis. Duis sagittis
                      ligula in sodales vehicula.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
