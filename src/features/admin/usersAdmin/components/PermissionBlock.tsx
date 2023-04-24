import React, { useState } from "react";
import clsx from "clsx";
import { Option } from "../types";

type PermissionBlockProps = {
  name: string;
  options: Option[];
  className?: string;
};

export const PermissionBlock = (props: PermissionBlockProps) => {
  const { name, options, className } = props;
  const [isCheckAll, setIsCheckAll] = useState(false);
	const [permissionData, setPermissionData] = useState(options.map(option => {
		return {
			name: option.label,
			isChecked: false
		}
	}))

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
  };

  return (
    <div className={clsx("p-2 bg-sky-100 rounded text-sky-950", className)}>
      <div className="flex items-center justify-between border-b border-gray-400">
        <div className="text-lg font-bold">{name}</div>
        <div className="flex">
          <input type="checkbox" name={name} id={`${name}-all`} onChange={e => handleCheckAll(e)} />
          <label className="ml-1" htmlFor={`${name}-all`}>
            Check all
          </label>
        </div>
      </div>
      <div className="py-2 flex justify-between flex-wrap">
        {permissionData.map((permission, idx) => (
          <div className="flex lg:basis-1/2" key={permission.name as string}>
            <input
              type="checkbox"
              name={`${name}-group`}
              id={`item-${permission.name}`}
              // value={permission.value}
              onChange={(e) => handleCheck(e)}
							checked={permission.isChecked}
            />
            <label className="ml-1" htmlFor={`item-${permission.name}`}>
              {permission.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
