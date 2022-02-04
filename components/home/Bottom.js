import React from "react";
import Image from "next/image";

function Bottom() {
  return (
    <div>
      <div className="grid grid-cols-12 bg-white md:bg-inherit">
        <div className="row-span-full md:col-start-1 md:col-span-9 bg-white h-screen"></div>
        <div className="row-span-full col-start-1 col-span-12 h-auto p-5 md:p-20 mt-0 md:mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
            <BottomContents />
            <BottomLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
const BottomContents = () => (
  <>
    <div className="grid grid-cols-12 -mb-16 md:mb-10">
      <div className="row-span-full col-start-1 col-span-12 ml-1 md:ml-3">
        <Image
          className="absolute object-contain rounded-2xl z-10"
          src="http://ifewl.com/party.png"
          width={525}
          height={555}
        />
      </div>
      <div className="row-span-full col-start-1 col-span-12 md:mt-3">
        <Image
          className="absolute object-contain rounded-2xl z-0 drop-shadow-md"
          src="http://ifewl.com/rect.png"
          width={525}
          height={555}
        />
      </div>
    </div>

    <div className="font-ivy md:flex md:flex-col md:justify-center">
      <h1 className="text-shadow-md md:text-shadow-xl shadow-black text-2xl md:text-[3.875rem] leading-[4rem] mb-0 md:mb-8">
        Knowing the numbers is never <span className="italic">enough</span>.
      </h1>

      <p className="font-gordita md:text-lg text-gray-900 shadow-gray-900 drop-shadow-md">
        It's about understanding the opportunity and challenges behind numbers -
        and planning for a stronger future. What's the right product selection
        for your customers? Which tools and information could make your business
        even more successful? At Southern Glazer's, we tailor our services for
        each and every one of our customers. Because we know that when we come
        together, there's always somethingg to celebrate.
      </p>
    </div>
  </>
);
const BottomLinks = () => (
  <div className="col-start-1 col-span-12 h-auto">
    <div className="grid grid-cols-12 md:grid-cols-9">
      <div className="col-start-1 col-span-12 md:col-span-3 flex mb-5 md:mb-0 flex-col items-center">
        <div className="rounded-full bg-orange h-40 w-40 mb-4">
          <div className="opacity-100">
            <Image
              src="http://ifewl.com/bottle.png"
              width={280}
              height={280}
              className="absolute z-40"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-ivy text-[2.15rem]">Customers</h1>
          <button
            className=" text-slate-500 text-xl font-niveau background-transparent px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <span className="mr-4">See our portfolio</span>
            <Image
              src="http://ifewl.com/arrow.svg"
              width={14}
              height={14}
              className="object-fill"
            />
          </button>
        </div>
      </div>
      <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-3 mb-5 md:mb-0 flex flex-col items-center">
        <div className="rounded-full bg-orange h-40 w-40">
          <Image
            src="http://ifewl.com/gift.png"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        <Image
          src="http://ifewl.com/line.png"
          width={1}
          height={23}
          className="object-contain"
        />
        <div className="flex flex-col items-center">
          <h1 className="font-ivy text-[2.15rem]">Supliers</h1>
          <button
            className=" text-slate-500 text-xl font-niveau background-transparent px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <span className="mr-4">Work with us</span>
            <Image
              src="http://ifewl.com/arrow.svg"
              width={14}
              height={14}
              className="object-fill"
            />
          </button>
        </div>
      </div>
      <div className="col-start-1 col-span-12  md:col-start-7 md:col-span-3 flex flex-col items-center">
        <div className="rounded-full bg-orange h-40 w-40 mb-4">
          <Image
            src="http://ifewl.com/setting.png"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-ivy text-[2.15rem]">Team</h1>
          <button
            className=" text-slate-500 text-xl font-niveau background-transparent px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <span className="mr-4">Sign in or apply</span>
            <Image
              src="http://ifewl.com/arrow.svg"
              width={14}
              height={14}
              className="object-fill"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Bottom;
