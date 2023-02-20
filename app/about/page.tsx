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
            className="font-mono text-white text-xl md:text-xl lg:text-xl xl:text-xl font-bold font-poppins text-center ml-5"
            style={{
              background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
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
              <a href="/about " className="font-mono text-white">
                About
              </a>
            </li>

            <li>
              <a href="https://tally.so/r/wQo6Pp" className="font-mono text-white">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    

      <div className="relative h-screen w-screen bg-black">
        <br></br>
        <img
    src="/ring.png"
    className="absolute h-full w-full object-cover opacity-20"
  />

        <h1
          className="font-mono text-white text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold font-mono text-center mb-10 ml-5 mr-5"
          style={{
              background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          into the future.
        </h1>

        <p className="font-mono text-white mt-2 ml-10 mb-6 mr-10 text-center">
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
          className="font-mono text-white text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold font-mono text-left mb-1 ml-10 mr-5"
          style={{
            background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
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
                <p className="font-mono text-white text-sm">01.07.2021</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  fishHunt <img className="inline h-10" src='fish.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                
                The Coding Treasure Hunt challenges participants to solve coding puzzles and decipher codes to find the hidden treasure, combining adventure and problem-solving in a thrilling competition.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">13.09.2021</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Resem <img className="inline h-10" src='book.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                A Research based Hackathon by ACM is a premier event for researchers, providing a platform to showcase innovative ideas, network, and compete for prizes by presenting a condensed research paper. An opportunity to make a lasting impact in this field.
                </p>
              </div>
            </li>
            
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                Breakout Rooms <img className="inline h-10" src='whiteboard.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                Breakout Rooms were designed with the philosophy that the best way to overcome a challenge is to solve it. Participants form teams and tackle a task, writing down their ideas and opinions on a whiteboard, using their creativity to find innovative solutions.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Movie Night <img className="inline h-10" src='cinema.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                Movie Night is the perfect way to end a three-day fest with a fun and entertaining experience. The night will feature a screening of a thrilling sci-fi movie, providing a delightful and amusing ending to the fest.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                 Leadeship Summit <img className="inline h-10" src='leader.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                The Leadership Summit is a transformative event for aspiring leaders, providing rare access to industry experts and influencers for personal and professional growth through hands-on experience and valuable insights. A must-attend opportunity.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">prolly 25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  MentorXWorkshop <img className="inline h-10" src='workshop.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                MentorXWorkshop is something something something...
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Visual Voyage <img className="inline h-10" src='visual_voyage.png'/>
                </h4> 
                <p className="font-mono text-white mb-3">
                Some online event description
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.11.2021</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Visual Voyage AI <img className="inline h-10" src='visual_voyage_ai.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                Some online event description
                </p>
              </div>
            </li>
          </ol>
          <div className="content-center justify-center place-content-center mx-10 my-10">
          <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-black rounded-box place-content-center max-h-fit">
          <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div>
  <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div>
  <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div>
  <div className="carousel-item content-center ">
    <img src="/black_background.png" className="rounded-box h-20" />
  </div>
  <div className="carousel-item content-center ">
    <img src="/mentorx.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/unstop.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/voiceflow.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/hoverRobotix.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/rev-up.png" className="rounded-box h-20"/>
  </div>
</div>
</div>

        </div>
  <div className="bg-black">
        <h1
          className="font-mono text-white text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-poppins text-right ml-5 px-5"
          style={{
            background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         Contact Us
        </h1>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-right">
        Get in touch with our team for any assistance and inquiries.
        </h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-right" ><b>Ishan (Event management head)</b>: <a href="tel:+919821184504"><br/>+91 98211 84504</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-right" ><b>Abhimanyu (Treasurer)</b>: <a href="tel:+919729245712"><br/>+91 97292 45712</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-right" ><b>Arjun (PR and Outreach head)</b>: <a href="tel:+917355619956"><br/>+91 73556 19956</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-right" >Mail us: <a href = "mailto: acm@bennett.something"><br/>acm@bennett.edu.in</a></h6>
        <br></br>
        <br></br>


        </div>

        
      </div>
    </>
  );
};

export default Timeline;
