import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "number";
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  value?: string;
  onUpdateVal?: (value: string | number) => void;
  classLabel?: string;
  isRequired?: boolean;
};

export const InputField = (props: InputFieldProps) => {
  const { type = "text", label, value, onUpdateVal, className, registration, error, classLabel, isRequired } = props;
  return (
    <FieldWrapper label={label} error={error} className={classLabel} isRequired={isRequired}>
      <input
        type={type}
        className={clsx(
          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        value={value}
        {...registration}
        onChange={e => onUpdateVal ? onUpdateVal(e.target.value) : null}
      />
    </FieldWrapper>
  );
};
