import {
  ComputerDesktopIcon,
  UserIcon,
  BookOpenIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

type SideMenuProps = {
  isOpenSideMenu: boolean;
};
const navMenus = [
  {
    to: "/",
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
    title: "Courses",
    icon: BookOpenIcon,
    children: [
      {
        to: "courses/course1",
        title: "Course1",
        icon: BookOpenIcon,
      },
      {
        to: "courses/course2",
        title: "Course2",
        icon: BookOpenIcon,
      },
    ],
  },
];
const SideMenu = (props: SideMenuProps) => {
  const { isOpenSideMenu } = props;
  const location = useLocation();
  return (
    <div
      className={`${
        isOpenSideMenu ? "left-0" : "-left-60"
      } h-screen fixed top-14 transition-all`}
    >
      <div className="flex w-60">
        <div className="bg-gray-700 flex-col flex-1 h-screen">
          <div className="flex-1 text-slate-300 py-3">
            {navMenus.map((link) =>
              link.children ? (
                <Disclosure key={link.title}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full">
                        <div className="flex mb-2 px-3 h-10 items-center justify-between">
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
                      <Disclosure.Panel>
                        {link.children.map((child) => (
                          <NavLink
                            to={child.to}
                            key={child.to}
                            state={{ location }}
                          >
                            <div className="flex mb-2 pl-5 h-10 items-center">
                              <child.icon className="h-5 v-5 mr-3" />
                              <span>{child.title}</span>
                            </div>
                          </NavLink>
                        ))}
                      </Disclosure.Panel>
                    </>
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
                  <div className="flex mb-2 pl-3 h-10 items-center">
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
