import React, { useEffect, useState } from "react";
import { Table } from "@/components/Elements/Table";
import { Link } from "react-router-dom";
import RolesSelect from "../components/RolesSelect";
import clsx from 'clsx';

type UsersTable = {
  id: string;
  name: string;
  status: string;
  role: string;
};
type UpdateRole = {
  id: string;
  role: string | number | string[];
};
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
export const UsersList = () => {
  const [roleState, setRoleState] = useState<UpdateRole>();
  const handleChangeRole = ({ id, role }: UpdateRole) => setRoleState({ id, role });

  useEffect(() => {
    // call api update role
  }, [roleState]);

  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold text-sky-950">Users</h1>
      <div className="py-4">
        <label className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>
      <Table<UsersTable>
        data={[
          {
            id: "1",
            name: "Mai Hong Son",
            status: "active",
            role: "super admin",
          },
          {
            id: "2",
            name: "Tung TH",
            status: "active",
            role: "staff",
          },
          {
            id: "3",
            name: "Vinh LQ",
            status: "active",
            role: "staff",
          },
          {
            id: "4",
            name: "Linh TV",
            status: "active",
            role: "read-only",
          },
        ]}
        columns={[
          {
            title: "Id",
            field: "id",
            Cell({ entry: { id } }) {
              return (
                <Link to={`${id}`} className="hover:text-sky-600">
                  {id}
                </Link>
              );
            },
          },
          {
            title: "Name",
            field: "name",
            Cell({ entry: { id, name } }) {
              return (
                <Link to={`${id}`} className="hover:text-sky-600">
                  {name}
                </Link>
              );
            },
          },
          {
            title: "Status",
            field: "status",
            Cell({ entry: {status} }) {
                return (
                  <div className={clsx({'text-green-600': status == 'active'}, {'text-yellow-500': 'un-active'})}>{status}</div>
                )
            },
          },
          {
            title: "Role",
            field: "role",
            Cell({ entry: { role, id } }) {
              return (
                <RolesSelect
                  options={roleOptions}
                  defaultValue={role}
                  onChangeRole={(role) => handleChangeRole({ id, role })}
                  className="ring-sky-200 text-sky-700"
                />
              );
            },
          },
        ]}
      />
    </div>
  );
};
