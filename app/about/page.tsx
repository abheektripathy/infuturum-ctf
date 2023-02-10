/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/header";
import React from "react";

const Timeline: React.FC = () => {
  return (
    <>
      <div className="navbar bg-black">
        <div className="flex-1">
          <a
            href="/"
            className="text-white text-xl md:text-xl lg:text-xl xl:text-xl font-bold font-poppins text-center ml-5"
            style={{
              background:
                "linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            infuturum
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/about " className="font-mono">
                about
              </a>
            </li>

            <li>
              <a href="https://tally.so/r/wQo6Pp" className="font-mono">
                register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen h-screen bg-black">
        <br></br>
        <h1
          className="text-white text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold font-mono text-center mb-10 ml-5 mr-5"
          style={{
            background:
              "linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          into the future.
        </h1>
        <p className="text-gray-400 mt-2 ml-10 mb-6 mr-10 text-center">
          Get ready for INFUTURUM, a celebratory extravaganza that marks the
          75th anniversary of ACM BU! Get ready for a scintillating journey that
          is sure to captivate your mind and leave an indelible impression.
          Immerse yourself in an eclectic mix of interactive events that will
          challenge you, excite you and reward you like never before. Compete
          for stunning prizes, and be part of a celebration that promises to be
          like nothing you've ever experienced before. Don't miss this unique
          opportunity to celebrate in grand style and be a part of INFUTURUM, a
          celebration that will be remembered for years to come!
        </p>
        <br></br>
        <br></br>
        <h1
          className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold font-mono text-left mb-1 ml-10 mr-5"
          style={{
            background:
              "linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          itinerary
        </h1>
        <div className="px-10 py-10 bg-black">
          <ol className="border-l border-gray-300">
            <li>
              <div className="flex flex-start items-center pt-3">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">01.07.2021</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  fishHunt
                </h4>
                <p className="text-gray-500 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">13.09.2021</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Hackerhouse
                </h4>
                <p className="text-gray-500 mb-3">
                  Libero expedita explicabo eius fugiat quia aspernatur autem
                  laudantium error architecto recusandae natus sapiente sit nam
                  eaque, consectetur porro molestiae ipsam an deleniti.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono"></h4>
                <p className="text-gray-500 mb-3">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Title of section 3
                </h4>
                <p className="text-gray-500 mb-3">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="text-gray-500 text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Title of section 3
                </h4>
                <p className="text-gray-500 mb-3">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li>
          </ol>
          <div className="content-center justify-center place-content-center mx-10 my-10">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box place-content-center ">
  <div className="carousel-item ">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="/favicon.ico" className="rounded-box" />
  </div>
</div>
</div>

        </div>
  <div className="bg-black">
        <h1
          className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold font-mono text-right mb-1 ml-10 mr-5"
          style={{
            background:
              "linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         Contact Us
        </h1>
        <h6 className="text-gray-400 mt-2 ml-10 mb-6 mr-5 text-right">
        Get in touch with our team for any assistance and inquiries.
        </h6>
        <br></br>
        <br></br>


        </div>

        
      </div>
    </>
  );
};

export default Timeline;
