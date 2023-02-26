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
    

      <div className="relative h-full w-screen bg-black">
        <br ></br>
        <img
    src="/ring.png"
    className="absolute h-screen w-screen object-cover opacity-40"
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
        Get ready for INFUTURUM, a celebratory extravaganza that marks the 75th anniversary of ACM BU! Get ready for a scintillating journey that is sure to captivate your mind and leave an indelible impression. Immerse yourself in an wide ranging mix of interactive events that will challenge you, excite you and reward you like never before. Compete for stunning prizes, and be part of a fest that promises to be like nothing you've ever experienced before. Don't miss this unique opportunity to celebrate in grand style and be a part of INFUTURUM, that will be remembered for years to come!
        </p>
        <br ></br>
        <br></br>
        <p className="font-bold text-white mt-2 ml-10 mb-6 mr-10 text-left">Prize Pool of $46,069 across all events</p>
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
                <p className="font-mono text-white text-sm">24.02.23 - 26.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Fish Hunt <img className="inline h-10" src='fish.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                
                The Fish Hunt challenges participants to solve puzzles and decipher codes to find the hidden treasure, combining adventure and problem-solving in a thrilling competition.
                </p>
                <p className="font-mono text-white text-sm">Time: Friday 18:00hrs  to  Sunday 12:00hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">24.02.23 - 25.02.23</p>
                {/* <p className="font-mono text-white text-sm">22:00</p> */}
              </div>
              <div className="mt-0.5 ml-4 mb-6">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Resem <img className="inline h-10" src='book.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                A <b>Research based Hackathon</b> by ACM is a premier event for all, providing a platform to showcase innovative ideas, network, and compete for prizes by presenting a condensed research paper. An opportunity to make a lasting impact in this field.
                </p>
                {/* <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div> */}
                <p className="font-mono text-white text-sm">Time: Friday 22:00hrs  to  Saturday 23:59hrs</p>
              </div>
              
            </li>
            
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                {/* <p className="font-mono text-white text-sm">25.02.23</p> */}
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                Breakout Rooms <img className="inline h-10" src='whiteboard.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                The first ever inter-chapter/club/society event where participants need to form teams and tackle a task, writing down their ideas and opinions on a whiteboard, using their creativity to find innovative solutions.
                </p>
                <p className="font-mono text-white text-sm">Time:Saturday 10:00hrs  to  Saturday 12:00hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">26.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Raw Reality <img className="inline h-10" src='cinema.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                Raw Reality is the perfect entertaining experience. The night will feature a screening of a thrilling sci-fi documentary, providing a delightful and amusing ending to the fest.
                </p>
                <p className="font-mono text-white text-sm">Time: Sunday 21:00hrs  to  Sunday 23:30hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">26.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                 Leadership Summit <img className="inline h-10" src='leader.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                The Leadership Summit is a transformative event for aspiring leaders, providing rare access to industry experts, start-up founders and influencers for personal and professional growth through hands-on experience and valuable insights. A must-attend opportunity.
                </p>
                <p className="font-mono text-white text-sm">Time: Sunday 14:00hrs  to  Sunday 16:00hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">24.02.23 - 26.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Visual Voyage <img className="inline h-10" src='visual_voyage.png'/>
                </h4> 
                <p className="font-mono text-white mb-3">
                Join ACM-BU's 'Visual Voyage' challenge and create an innovative ad highlighting a product's unique selling proposition and appeal to its target audience. Sign up now for your chance to shine!
                </p>
                <p className="font-mono text-white text-sm">Time: Friday 18:00hrs  to  Sunday 23:59hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">24.02.23 - 26.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  Visual Voyage AI <img className="inline h-7" src='visual_voyage_ai.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                A creative event where you'll use mid-journey to generate an attractive image using your imagination. Create a unique prompt to generate images and win a cash prize and a feature on ACM's official Instagram handle.
                </p>
                <p className="font-mono text-white text-sm">Time: Friday 18:00hrs  to  Sunday 23:59hrs</p>
              </div>
            </li>
            <li>
              <div className="flex flex-start items-center pt-2">
                <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                <p className="font-mono text-white text-sm">25.02.23</p>
              </div>
              <div className="mt-0.5 ml-4 pb-5">
                <h4 className="text-green-600 font-semibold text-xl mb-1.5 font-mono">
                  MentorXWorkshop <img className="inline h-10" src='workshop.png'/>
                </h4>
                <p className="font-mono text-white mb-3">
                A workshop where experts will introduce their startup and they will share their experiences and insights. The experts of MentorX will provide you with the tools, knowledge, and resources you need to take your ideas to the next level and turn your vision into a successful reality. 
                </p>
                <p className="font-mono text-white text-sm">Time: Saturday 12:00hrs  to  Saturday 13:30hrs</p>
              </div>
            </li>
          </ol>
          <div className="content-center justify-center place-content-center mx-10 my-10">
          <div className="carousel carousel-center max-w-full p-4 space-x-20 bg-black rounded-box place-content-left max-h-fit">
  <div className="carousel-item content-center ">
    <img src="/unstop.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/mentorx.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/rev-up.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/hoverRobotix.png" className="rounded-box h-20" />
  </div> 
  <div className="carousel-item">
    <img src="/voiceflow.png" className="rounded-box h-20"/>
  </div>
</div>
</div>

        </div>
  <div className="bg-black">
        <h1
          className="font-mono text-white text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold font-poppins text-left ml-5 px-5"
          style={{
            background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         Contact Us
        </h1>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-left">
        Get in touch with our team for any assistance and inquiries.
        </h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-left" ><b>Ishan Mohan(Events and Logistics head)</b>: <a href="tel:+919821184504"><br/>+91 98211 84504</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-left" ><b>Abhimanyu Dhull(Treasurer)</b>: <a href="tel:+919729245712"><br/>+91 97292 45712</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-left" ><b>Arjun Singh Parihar(PR and Outreach head)</b>: <a href="tel:+917355619956"><br/>+91 73556 19956</a></h6>
        <h6 className="font-mono text-white mt-2 ml-10 mb-6 mr-5 text-left" ><b>Mail us:</b> <a href = "mailto: acm@bennett.something"><br/>acm@bennett.edu.in</a></h6>
        <br></br>
        <br></br>


        </div>

        
      </div>
    </>
  );
};

export default Timeline;
