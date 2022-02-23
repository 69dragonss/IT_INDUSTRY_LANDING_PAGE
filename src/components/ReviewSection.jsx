export const ReviewSection = () => {
  return (
    <section className="max-w-[62rem] mx-auto my-8 ">
      <div className="flex flex-col space-y-8">
        {/* heading  */}
        <h1 className="text-5xl font-black text-center">Read what our customers say</h1>
        {/* review cards  */}
        <div className="flex justify-center gap-20 py-8">
          <div className="max-w-sm bg-slate-100 shadow-md py-16 px-8 rounded-2xl space-y-4">
            <p>
              Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
              Ut sem nulla pharetra diam sit amet nisl.
            </p>
            <div>
              <h1 className="font-black text-xl">Celia Almeda</h1>
              <h2 className="text-slate-700">CEO Company</h2>
            </div>
          </div>
          <div className="max-w-sm bg-slate-100 shadow-lg py-16 px-8 rounded-2xl space-y-4">
            <p>
              Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
              Ut sem nulla pharetra diam sit amet nisl.
            </p>
            <div>
              <h1 className="font-black text-xl">Umar Arshad</h1>
              <h2 className="text-slate-700">Security Expert</h2>
            </div>
          </div>
        </div>
        {/* button  */}

        <div className="text-center">
          <button className="rounded-full text-white text-sm text-left py-4 px-12 font-black bg-blue-400 shadow-lg">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};
