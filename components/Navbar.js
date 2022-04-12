import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="relative h-20 w-20">
          <Image
            src="/very-best.png"
            alt="very best entertainment logo"
            layout="fill"
          />
        </div>
        <div className="hidden lg:flex items-center justify-evenly space-x-20 text-white text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal md:font-semibold">
          {menu.map(({ id, name, href }) => (
            <div key={id} className="hover:text-Primary">
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button className="hidden lg:block text-white border md:border-2 border-Primary transition ease-in duration-200 hover:bg-Primary rounded-md text-base md:text-lg font-normal px-5 md:px-8 py-2">
            Register
          </button>
        </div>
        <button
          className=" animate-pulse"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          <HiOutlineViewGrid className="text-white text-3xl md:text-5xl block lg:hidden" />
        </button>
      </div>
      {isClicked && (
        <aside>
          <MobileNavbar />
        </aside>
      )}
    </>
  );
}

export const MobileNavbar = () => {
  return (
    <div className="pl-5 pt-3 pb-5 w-full bg-black space-y-5">
      <div className="space-y-5 text-white text-lg font-normal">
        {menu.map(({ id, name, href }) => (
          <div key={id} className="hover:text-Primary">
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="text-white border md:border-2 border-Primary transition ease-in duration-200 hover:bg-Primary rounded-md text-base md:text-lg font-normal px-8 py-2">
          Register
        </button>
      </div>
    </div>
  );
};

export const menu = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Events",
    href: "/",
  },
  {
    id: 3,
    name: "Join Our Discord",
    href: "/",
  },
];
