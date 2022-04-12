import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="relative  h-20 w-20">
        <Image
          src="/very-best.png"
          alt="very best entertainment logo"
          layout="fill"
        />
      </div>
      <div className="hidden lg:flex items-center justify-evenly space-x-20 text-white text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal md:font-semibold">
        {menu.map(({ id, name, href }) => (
          <div key={id}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <button className="text-white border-2 border-Primary transition ease-in duration-200 hover:bg-Primary rounded-lg text-base md:text-lg font-normal px-6 py-2">
          Register
        </button>
      </div>
    </div>
  );
}

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
