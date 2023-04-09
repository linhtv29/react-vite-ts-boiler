import { Menu } from "@headlessui/react";
import {
  Bars3Icon,
  AcademicCapIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];
const Navbar = () => {
  return (
    <div className="px-6 bg-[#2196f3] text-white">
      <div className="w-full min-h-[64px] flex items-center justify-between m-auto">
        <div className="flex">
          <Bars3Icon className="h-6 w-6 sm:hidden" />
          <AcademicCapIcon className="h-8 w-10 ml-6" />
        </div>
        <Menu>
          <Menu.Button>
            <img
              className="h-8 rounded-full"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/bc/bc8373bc936f15e139d4e7cfc1afc7c5ef22b48d_full.jpg"
              alt=""
            />
          </Menu.Button>
          <Menu.Items>
            {links.map((link) => (
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                  >
                    <UsersIcon className="h-6 w-6" />
                    <span>{link.label}</span>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
