export const AdvertisorSection = () => {
  return (
    <div className="bg-[#293330]">
      <section className="max-w-[68rem] my-16 min-h-[75vh] mx-auto grid grid-cols-2 gap-20  py-16">
        <div className="flex flex-col py-8 space-y-4">
          <h1 className="text-5xl text-white font-black leading-tight">
            Large payments volume or unique business model?
          </h1>
          <p className="text-white leading-8">
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse
            rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien.
          </p>
          <div>
            <button className="rounded-full text-white text-sm text-left py-4 px-12 font-black bg-blue-400">
              READ MORE
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-x-12 ">
          <div>
            <img src="/amazon.svg" alt="amazon" />
          </div>
          <div>
            <img src="/binance.svg" alt="binance.svg" />
          </div>
          <div>
            <img src="/evga.svg" alt="evga" />
          </div>
          <div>
            <img src="/tesla.svg" alt="tesla" />
          </div>
          <div>
            <img src="/sony.svg" alt="sony" />
          </div>
          <div>
            <img src="/crocs.svg" alt="crocs" />
          </div>
        </div>
      </section>
    </div>
  );
};
