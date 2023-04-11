import {ComputerDesktopIcon} from "@heroicons/react/24/solid";

type SideMenuProps = {
  isOpenSideMenu: boolean;
};
const SideMenu = (props: SideMenuProps) => {
	const {isOpenSideMenu} = props
  return (
    <div className={`${isOpenSideMenu ? 'left-0' : '-left-60'} h-screen fixed top-0 transition-all`}>
      <div className="flex w-60">
        <div className="bg-gray-800 flex-col flex-1 h-screen">
          <div className="bg-gray-900 text-white flex h-14 items-center justify-center">
            QBHD92
          </div>
          <div className="flex-1 text-slate-300 pl-2 py-2">
						<div className="flex">
							<ComputerDesktopIcon className="h-5 v-5 mr-3" />
							<span>Dashboard</span>
						</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
