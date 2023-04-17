import clsx from "clsx";
import { UseFormRegisterReturn, UseFormRegister, UseFormSetValue } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";
import { useState } from "react";
import { Button } from "../Elements/Button";
import { ProfileValues } from "@/features/profile/routes";

type InputProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
	setValue: UseFormSetValue<ProfileValues>;
  value?: string;
  // onUpdateVal?: (value: string | number) => void;
  classLabel?: string;
	name: keyof ProfileValues;
};

export const InputPhoto = (props: InputProps) => {
  const {
    label,
    value,
    // onUpdateVal,
    className,
    registration,
    error,
    classLabel,
    isRequired,
		name,
		setValue
  } = props;
  const [photoPreview, setPhotoPreview] = useState(value);



  const handleUpload = (e: any) => {
    const files = e.target.files[0];
		setValue(name, files)
    setPhotoPreview(URL.createObjectURL(files));
  };

  return (
    <FieldWrapper
      label={label}
      error={error}
      className={classLabel}
      isRequired={isRequired}
    >
      <input
        type="file"
        id={`${label}-photo`}
        className={clsx("hidden", className)}
        {...registration}
        onChange={(e) => handleUpload(e)}
        name="testPhotos"
        accept="image/png, image/jpeg"
      />
      <img
        src={photoPreview ? photoPreview : "src/assets/image/blank-avatar.jpg"}
        className="w-48 ml-5 my-3"
        alt="avatar"
      />
      <Button
        type="button"
        size="sm"
        className="ml-5 md:w-36 bg-white text-sky-800 border-sky-800"
      >
        <label className="cursor-pointer" htmlFor={`${label}-photo`}>
          Update avatar
        </label>
      </Button>
    </FieldWrapper>
  );
};
