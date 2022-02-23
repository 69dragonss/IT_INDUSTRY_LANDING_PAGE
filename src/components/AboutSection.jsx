export const AboutSection = () => {
  return (
    <section className="max-w-6xl my-16 min-h-[75vh] mx-auto grid grid-cols-2 ">
      <div className="flex flex-col space-y-6">
        <h3 className="text-blue-400 tracking-wider text-xl">ABOUT US</h3>
        <h1 className="text-5xl font-black">IT Solution Strategy Development For Your Bussiness</h1>
        <p>
          Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart
          money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You
          day real less till dear read.
        </p>
        <div>
          <p className="text-lg text-gray-700">Support via E-mail and Phone</p>
          <p className="text-lg text-gray-700">Multi-Language Support</p>
        </div>
        <div>
          <button className="rounded-full text-white text-sm text-left py-4 px-12 font-black bg-blue-400">
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img src="/desktop.jpeg" className="h-full object-cover" alt="desktop" />
      </div>
    </section>
  );
};
