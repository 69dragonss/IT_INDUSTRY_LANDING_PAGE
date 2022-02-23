export const HeroSection = () => {
  return (
    <header
      className="min-h-[95vh] flex flex-col items-center justify-center relative before:absolute before:bg-black before:opacity-30 before:inset-0"
      style={{
        backgroundImage: "url('/bg-doctor.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <section className="relative mb-16">
        <h1 className="text-center text-white text-xl tracking-widest mb-10">ABOUT US</h1>
        <div className="space-y-4">
          <h1 className="text-center text-7xl max-w-[60rem] font-black text-white">
            We've help businesses increase revenue
          </h1>
          <p className="text-center text-3xl font-black text-white">See what we can do for you!</p>
          <div className="flex justify-center space-x-12 pt-16">
            <button className="py-4 px-12 font-black text-white rounded-full bg-blue-400">READ MORE</button>
            <button className="py-4 px-12 font-black rounded-full text-black bg-yellow-400">LEARN MORE</button>
          </div>
        </div>
      </section>
    </header>
  );
};
