export const AdviceSection = () => {
  return (
    <div className="bg-[#293330]">
      <section className="max-w-6xl mx-auto py-16">
        <div className="space-y-4">
          <h1 className="text-center text-white text-5xl font-black">Get Free Advice</h1>
          <p className="max-w-md mx-auto text-center text-slate-300">
            Sample text. Click to select the text box. Click again or double click to start editing the text.
          </p>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center max-w-xl mx-auto">
              <label className="text-white font-black text-xl mx-2">Name:</label>
              <input type="text" className="w-full py-3 px-5 rounded-full" placeholder="Enter the Name" />
            </div>
            <div>
              <div className="flex items-center justify-center max-w-xl mx-auto">
                <label className="text-white font-black text-xl mx-2">Email:</label>
                <input type="text" className="w-full py-3 px-5 rounded-full" placeholder="Enter the Email" />
              </div>
            </div>
          </div>
          <div className="text-center py-4">
            <button className="rounded-full text-white shadow-black shadow-md text-sm text-left py-4 px-12 font-black bg-blue-400">
              Submit
            </button>
          </div>
        </div>
      </section>
      <div className="h-1 bg-white "></div>
    </div>
  );
};
