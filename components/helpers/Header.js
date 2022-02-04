import React from "react";
import Image from "next/image";
import contents from "../../utils/contents";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between px-10 md:px-20 mt-0 md:mt-5">
        <div className="logo">
          <Logo />
        </div>
        <div className="lg:flex flex-col justify-between hidden md:block">
          <SecondaryMenu />
          <PrimaryMenu />
        </div>
        {/* Todo: Mobile menus */}
        <div className="block md:hidden mt-4">
          <MenuIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
}

// header sub-component: Logo placement
const Logo = () => (
  <Image
    className="object-contain"
    src="http://ifewl.com/logo.png"
    width={73}
    height={63}
  />
);

// header sub-component: Primary menus
// Todo: will be modified when dynamic links are from API our any sources
const PrimaryMenu = () => (
  <nav className="">
    <div className="flex whitespace-nowrap space-x-10 pb-2">
      <h1 className="tracking-wide text-[1.125rem] cursor-pointer">Home</h1>
      {Object.entries(contents.primaryMenus).map(([key, { title, url }]) => (
        <h1
          key={key}
          className="font-niveau cursor-pointer opacity-60 active:opacity-100 text-[1.125rem] tracking-wide"
        >
          {title}
        </h1>
      ))}
    </div>
  </nav>
);

// header sub-component: Secondary menus
const SecondaryMenu = () => (
  <div className="flex flex-row divide-x divide-solid divide-gray-600 justify-end">
    <div className="flex flex-row space-x-4 px-7 justify-self-end">
      {Object.entries(contents.socialIcons).map(
        ([key, { title, iconUrl, external }]) => (
          <Icon key={key} src={iconUrl} />
        )
      )}
    </div>

    <div>
      <h2 className="flex flex-row font-niveau cursor-pointer pl-5 tracking-wide">
        Log In
        <ChevronDownIcon className="h-6 w-7" />
      </h2>
    </div>
  </div>
);

// header sub-component: Social icons
const Icon = ({ src }) => (
  <div>
    <Image
      className="cursor-pointer hover:animate-bounce"
      src={src}
      height={20}
      width={20}
    />
  </div>
);

export default Header;
