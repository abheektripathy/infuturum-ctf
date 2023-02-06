import MainSection from "@/components/mainsection";

export default function Home() {
  return (

    // <MainSection></MainSection>
    <div className="relative h-screen w-screen bg-black">
  <video
    src="/bgedit.mp4"
    autoPlay
    muted
    loop
    className="absolute h-full w-full object-cover opacity-80"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-8xl font-bold font-poppins text-center" style={{
        background: 'linear-gradient(to right,rgba(114, 231, 23, 1), rgba(1, 70, 0, 1))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>infuturum</h1>
  </div>
</div>
  
  //   <section className="h-screen bg-secondary">
  //   <video
  //     src="/bgedit.mp4"
  //     autoPlay
  //     muted
  //     loop
  //     className="absolute h-full w-full object-cover brightness-80"
  //   />
  // <div className="relative flex h-screen w-screen flex-col items-center py-[20%] px-[2%] md:flex-row md:items-start md:px-[4%]">
  //       <div className="flex h-full flex-col items-center justify-center space-y-[12%] md:w-2/4 md:items-start">
  //         <div className="flex flex-col items-center space-y-2 text-center md:items-start md:text-start lg:w-4/5">
  //           <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent md:text-7xl lg:text-8xl">
  //             infururum
  //           </h2>
  //           <h3 className="text-3xl text-primary md:text-4xl lg:text-5xl">
  //             Join the [strift] revolution
  //           </h3>
  //         </div>
  //         <div className="flex w-5/6 flex-col items-center space-y-2 text-center md:items-start md:text-start lg:w-7/12">
  //         <h1 className="absolute font-bold text-6xl leading-tight text-center items-center text-transparent" >
  //     Infurum
  //   </h1>
  //           <button className="btn-secondary glass btn-lg btn md:btn-block">
  //             Become a label
  //           </button>
  //         </div>
  //       </div>
  //       <div className="flex h-full w-full flex-col items-center justify-center md:w-2/4">

  //         <h3 className="text-2xl tracking-widest text-primary lg:text-4xl">
  //           LABELS
  //         </h3>
  //       </div>
  //     </div>
  //   </section>

   

      
  )
}
