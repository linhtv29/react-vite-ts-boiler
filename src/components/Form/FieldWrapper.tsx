import clsx from "clsx";
import * as React from "react";
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  isRequired?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  "className" | "children"
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children, isRequired = false } = props;
  return (
    <div>
      <span
        className={clsx("block text-sm font-medium text-gray-700", className)}
      >
        {label}
        {isRequired ? <span className="text-red-500 ml-1">*</span> : null}
        <div className="mt-1">{children}</div>
      </span>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
