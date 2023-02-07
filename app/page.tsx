/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import MainSection from "@/components/mainsection";

export default function Home() {
  return (
// {/* <div className="relative h-screen w-screen bg-black">
//   <video
//     src="/bgedit.mp4"
//     autoPlay
//     muted
//     loop
//     className="absolute h-full w-full object-cover opacity-80"
//   />
//   <div className="absolute inset-0 mb-10 flex items-center justify-center">
//     <li className="content-center">
//     <h1 className="text-white text-9xl font-bold font-poppins text-center mb-10" style={{
//         background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
//         backgroundClip: 'text',
//         WebkitBackgroundClip: 'text',
//         WebkitTextFillColor: 'transparent',
//       }}>infuturum.ctf</h1>
//     <h2 className="text-white text-xl font-mono text-center " >ACM 2023 ™</h2>
//     <h2 className="text-white text-xl font-mono text-center " > Here's the final problem.</h2>
//     <div className="flex items-center justify-center mt-10">
//   <img src="/trycode.png" alt="Image" className="w-1/3 h-1/3" />
// </div>
//     </li>
//   </div>
// </div>  */}

<div className="relative h-screen w-screen bg-black">
  <video
    src="/bgeditcomp2.webm"
    autoPlay
    muted
    loop
    className="absolute h-full w-full object-cover opacity-80"
  />
  <div className="absolute inset-0 mb-10 flex items-center justify-center">
    <li className="content-center">
    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-poppins text-center mb-10" style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum.ctf</h1>
    <h2 className="text-white text-lg md:text-xl font-mono text-center " >ACM 2023 ™</h2>
    <h2 className="text-white text-lg md:text-xl font-mono text-center " >Here's the final problem.</h2>
    <div className="flex items-center justify-center mt-10">
  <img src="/trycode.png" alt="Image" className={`w-1/3 h-1/3 xs:w-2/3 xs:h-2/3 md:w-2/3 md:h-2/3 lg:w-1/3 lg:h-1/3 xl:w-1/3 xl:h-1/3`}   />
</div>
    </li>
  </div>
</div>




      
  );
}
