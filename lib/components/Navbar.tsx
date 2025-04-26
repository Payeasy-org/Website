import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Features",
      route: "/",
    },
    {
      name: "Contact",
      route: "/",
    },
  ];
  return (
    <div className="mx-auto flex h-14 w-[90%] max-w-[1500px] items-center justify-between">
      <Image src="/logo.png" alt="Logo" height={30} width={130} />

      <div className="flex items-center gap-6">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.route}
            className="cursor-pointer text-xl font-semibold text-[#0D0D0D] underline-offset-2 transition-all duration-300 ease-in-out hover:underline"
          >
            {route.name}
          </Link>
        ))}
      </div>

      <button className="rounded-full bg-[linear-gradient(155deg,#7E55EC_0%,#AB49FF_50%)] px-6 py-3 font-semibold text-white">
        Join the waitlist
      </button>
    </div>
  );
};

export default Navbar;
