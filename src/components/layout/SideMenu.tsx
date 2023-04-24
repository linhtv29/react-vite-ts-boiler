import {
  ComputerDesktopIcon,
  UserIcon,
  BookOpenIcon,
  ChevronUpIcon,
  UsersIcon,
  Cog6ToothIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

type SideMenuProps = {
  isOpenSideMenu: boolean;
};

type RouteType = Record<string, any>;
const clientMenus = [
  {
    to: "",
    title: "Dashboard",
    icon: ComputerDesktopIcon,
  },
  {
    to: "profile",
    title: "Profile",
    icon: UserIcon,
  },
  {
    to: "courses",
    title: "My Courses",
    icon: BookOpenIcon,
    children: [
      {
        to: "courses",
        title: "Courses List",
        icon: BookOpenIcon,
      },
    ],
  },
];
const adminMenus = [
  {
    to: "/admin/dashboard",
    title: "Dashboard",
    icon: ComputerDesktopIcon,
  },
  {
    to: "profile",
    title: "Profile",
    icon: UserIcon,
  },
  {
    title: "Users Manager",
    icon: Cog6ToothIcon,
    children: [
      {
        to: "users/list",
        title: "Users List",
        icon: UsersIcon,
      },
      {
        to: "users/role",
        title: "Role Settings",
        icon: AdjustmentsHorizontalIcon,
      },
    ],
  },
  {
    title: "Courses",
    icon: BookOpenIcon,
    children: [
      {
        to: "courses",
        title: "Courses List",
        icon: BookOpenIcon,
      },
    ],
  },
];

let navMenus: RouteType[];

const SideMenu = (props: SideMenuProps) => {
  const { isOpenSideMenu } = props;
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  if (isAdmin) {
    navMenus = adminMenus;
  } else {
    navMenus = clientMenus;
  }
  return (
    <div
      className={`${
        isOpenSideMenu ? "left-0" : "-left-60"
      } h-screen fixed top-14 transition-all`}
    >
      <div className="flex w-60">
        <div className="bg-gray-700 flex-col flex-1 h-screen">
          <div className="flex-1 text-slate-300 py-3">
            {navMenus.map((link: RouteType) =>
              link.children ? (
                <Disclosure key={link.title}>
                  {({ open }) => (
                    <div className={`${open ? "bg-gray-900" : ""}`}>
                      <Disclosure.Button className="w-full">
                        <div className="flex py-2 px-3 h-10 items-center justify-between">
                          <div className="flex items-center">
                            <link.icon className="h-5 v-5 mr-3" />
                            <span>{link.title}</span>
                          </div>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 transition-all`}
                          />
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        className="transition-all duration-500 overflow-hidden"
                        enterFrom="transform opacity-0 max-h-0"
                        enterTo="transform opacity-100 max-h-96"
                        leaveFrom="transform opacity-100 max-h-96"
                        leaveTo="transform opacity-0 max-h-0"
                      >
                        <Disclosure.Panel static>
                          {link.children.map((child: RouteType) => (
                            <NavLink
                              to={child.to}
                              key={child.to}
                              state={{ location }}
                              className={({ isActive }) =>
                                `${
                                  isActive ? "font-bold text-white" : ""
                                } hover:font-bold`
                              }
                            >
                              <div className="flex py-2 pl-5 h-10 items-center">
                                <child.icon className="h-5 v-5 mr-3" />
                                <span>{child.title}</span>
                              </div>
                            </NavLink>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ) : (
                <NavLink
                  to={link.to}
                  key={link.to}
                  state={{ location }}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-white [&>div]:bg-gray-900" : ""
                  }
                >
                  <div className="flex py-2 pl-3 h-10 items-center">
                    <link.icon className="h-5 v-5 mr-3" />
                    <span>{link.title}</span>
                  </div>
                </NavLink>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
