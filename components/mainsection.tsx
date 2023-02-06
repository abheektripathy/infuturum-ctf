
export default function MainSection() {

    return (
      <section className="h-screen bg-secondary">
      <video
        src="/bgedit.mp4"
        autoPlay
        muted
        loop
        className="absolute h-full w-full object-cover"
      />
      <div className="h-12 bg-white w-12">
        <h1>hello</h1>
      </div>
    </section>
      );
}