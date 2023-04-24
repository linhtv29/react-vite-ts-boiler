import React from "react";
import RolesSelect from "../components/RolesSelect";
import { PermissionBlock } from "../components/PermissionBlock";
import { Option } from "../types";
import { Button } from "@/components/Elements/Button";

const roleOptions = [
  {
    label: "Admin",
    value: "super admin",
  },
  {
    label: "Staff",
    value: "staff",
  },
  {
    label: "client",
    value: "read-only",
  },
];

const Permissions: PermissionType[] = [
  {
    name: "User",
    permissions: [
      {
        label: "View User",
        value: 0,
      },
      {
        label: "Create User",
        value: 1,
      },
      {
        label: "Edit User",
        value: 2,
      },
      {
        label: "Delete User",
        value: 3,
      },
    ],
  },
  {
    name: "Role",
    permissions: [
      {
        label: "View Role",
        value: 0,
      },
      {
        label: "Create Role",
        value: 1,
      },
      {
        label: "Edit Role",
        value: 2,
      },
      {
        label: "Delete Role",
        value: 3,
      },
    ],
  },
  {
    name: "Post",
    permissions: [
      {
        label: "View Post",
        value: 0,
      },
      {
        label: "Create Post",
        value: 1,
      },
      {
        label: "Edit Post",
        value: 2,
      },
      {
        label: "Delete Post",
        value: 3,
      },
    ],
  },
];
type PermissionType = {
  name: string;
  permissions: Option[];
};
export const RoleSettings = () => {
  const handleChangeRole = () => {};

  return (
    <>
      <h1 className="text-3xl mb-2 font-bold text-sky-950">Role Settings</h1>
      <div className="mb-3 border-y-2 border-sky-300 flex items-center justify-center">
        <div className="flex items-center py-2">
          <label className="mr-2 text-sky-900" htmlFor="">
            Role:
          </label>
          <RolesSelect
            options={roleOptions}
            onChangeRole={(role) => handleChangeRole()}
            className="ring-sky-200 text-sky-700 mt-0"
            defaultValue={roleOptions[0].value}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {Permissions.map((item) => (
          <PermissionBlock name={item.name} options={item.permissions} key={item.name}/>
        ))}
      </div>
      <div className="flex">
        <Button type="button" className="w-full mt-4 md:w-60 bg-sky-600">
          Update
        </Button>
      </div>
    </>
  );
};
