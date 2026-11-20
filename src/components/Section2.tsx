import { Monitor, CircleParking, Coffee, Wifi, Zap, Waves, Dumbbell, Ellipsis,} from "lucide-react";

function Section2() {
  return (
    <section className="w-full px-6 py-14 md:px-12 lg:px-20 xl:px-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_2fr]">

        <div>
          <h2 className="max-w-82.5 text-2xl font-semibold leading-tight md:text-[28px]">
            We do our best facilities provide you
          </h2>

          <p className="mt-4 max-w-87.5 text-[12px] leading-6 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>

          <button className="mt-7 rounded-full bg-[#20AD78] px-6 py-3 text-[11px] font-medium text-white transition hover:bg-[#168c60]">
            Contact Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Monitor className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Private Workspace</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <CircleParking className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Parking Area</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Coffee className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Breakfast</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Wifi className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Free Wifi</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Zap className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Free Electricity</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Waves className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Swimming Pool</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Dumbbell className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Exercise Space</p>
          </div>

          <div className="flex h-34 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 transition hover:border-[#20AD78]">
            <Ellipsis className="h-7 w-7 text-[#20AD78]" strokeWidth={1.5} />
            <p className="text-[11px] text-gray-700">Other Service</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section2;
