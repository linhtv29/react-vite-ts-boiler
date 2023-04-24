import React from "react";
import clsx from 'clsx';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type RolesSelectProps = {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
	isDisabled?: boolean;
	onChangeRole: (val: string | number | string[]) => void;
};
const RolesSelect = (props : RolesSelectProps) => {
  const { options, className, defaultValue, placeholder, isDisabled, onChangeRole } = props;
  return (
    <select
      placeholder={placeholder}
      name="location"
      className={clsx(
        "mt-1 ring-2 block w-full pl-3 py-2 text-base border-gray-600 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md",
        className
      )}
      defaultValue={defaultValue}
			disabled={isDisabled}
			onChange={(e) => onChangeRole(e.target.value)}
    >
      {options.map(({ label, value }) => (
        <option key={label?.toString()} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default RolesSelect;
