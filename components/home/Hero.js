import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="h-auto bg-[#CB0007] p-10 mt-0 md:mt-5">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 m-0 md:m-10">
          <div className="md:flex md:flex-col md:justify-center">
            <h1 className="font-ivy text-white text-2xl md:text-4xl lg:text-[5rem] lg:leading-[5.4rem] mb-2 md:mb-8">
              To bringing people <span className="italic">together</span>.
            </h1>

            <p className="font-niveau md:text-lg text-white mr- mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="py-2 lg:py-6">
              <button className="bg-[#D8B243]  rounded w-60 h-14">
                <h1 className="tracking-wides uppercase">Portfolio</h1>
              </button>
            </div>
          </div>

          <div className="wrap w-full hidden md:block">
            <div className="grid grid-cols-10 ">
              <div className="row-span-full col-start-1 col-span-7">
                <Image
                  className="absolute object-contain rounded-2xl z-10"
                  src="http://ifewl.com/banner-image-1.png"
                  width={922}
                  height={440}
                />
              </div>
              <div className="row-span-full mt-32 col-span-6 col-end-9 bg-[#D8B243] w-[20rem] h-[20rem] rounded-2xl"></div>
              <div className="row-span-full mt-52 col-start-6 col-span-8 justify-center">
                <Image
                  className="absolute object-contain rounded-2xl z-10"
                  src="http://ifewl.com/banner-image-2.png"
                  width={262}
                  height={317}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-12">
          <div className="row-span-full col-start-1 col-span-1 bg-white"></div>
          <div className="row-span-full col-start-2 col-span-12 bg-[#CB0007] h-1">
            <div className="grid grid-cols-12">
              <div className="row-span-full col-start-10 col-span-12 -my-32">
                <div className="flex flex-row justify-end">
                  <Image
                    src="http://ifewl.com/Ellipse.svg"
                    width={280}
                    height={280}
                    className="absolute z-50 right-0"
                  />
                </div>
              </div>

              <div className="row-span-full col-start-11 col-span-12 self-center -my-14 ml-3">
                <Image
                  src="http://ifewl.com/Vector-Bottle.svg"
                  width={125}
                  height={125}
                  className="absolute z-40 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
