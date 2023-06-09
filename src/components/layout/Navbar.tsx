import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  AcademicCapIcon,
  PencilIcon,
  UsersIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  toggleSideMenu: () => void;
}

const links = [
  { href: "profile", label: "My profile" },
  { href: "", label: "Logout" },
];
const Navbar = (props: NavbarProps) => {
  const { toggleSideMenu } = props;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("email", "");
    navigate("/login");
  };
  return (
    <div className="px-3 bg-sky-800 text-white absolute top-0 left-0 w-full">
      <div className="w-full h-14 flex items-center justify-between m-auto">
        <div className="flex">
          <Bars3Icon
            onClick={() => toggleSideMenu()}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex justify-center items-center">
            <img
              className="h-8 rounded-full mr-1"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/bc/bc8373bc936f15e139d4e7cfc1afc7c5ef22b48d_full.jpg"
              alt=""
            />
            <div className="hidden md:block">User name</div>
            <ChevronDownIcon className="ml-1 h-5 w-5" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition-opacity duration-75"
            enterFrom="transform opacity-0 scale-10"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="absolute right-0 rounded w-56 shadow bg-white p-2">
              {links.map((link) =>
                link.label == "Logout" ? (
                  <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <div
                        className={`${
                          active
                            ? "bg-sky-500 text-white"
                            : "bg-white text-black"
                        } cursor-pointer inline-flex w-full px-2 py-2 rounded`}
                        onClick={() => logout()}
                      >
                        <UsersIcon className="h-6 w-6" />
                        <span className="ml-1">{link.label}</span>
                      </div>
                    )}
                  </Menu.Item>
                ) : (
                  <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <Link
                        to={link.href}
                        className={`${
                          active
                            ? "bg-sky-500 text-white"
                            : "bg-white text-black"
                        } cursor-pointer inline-flex w-full px-2 py-2 rounded`}
                      >
                        <UsersIcon className="h-6 w-6" />
                        <span className="ml-1">{link.label}</span>
                      </Link>
                    )}
                  </Menu.Item>
                )
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
