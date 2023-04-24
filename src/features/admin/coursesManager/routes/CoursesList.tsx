import React from "react";
import { Table } from "@/components/Elements/Table";
import { Link } from "react-router-dom";

type CoursesList = {
  id: string;
  title: string;
  createdAt: string;
  author: string;
  status: string;
};
export const CoursesList = () => {
  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold text-sky-950">Courses</h1>
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
      <Table<CoursesList>
        data={[
          {
            id: "1",
            title: "bai 1",
            createdAt: "26/10/2022",
            author: "tvl",
            status: "draft",
          },
          {
            id: "2",
            title: "bai 2",
            createdAt: "26/11/2022",
            author: "tvl",
            status: "draft",
          },
          {
            id: "3",
            title: "bai 3",
            createdAt: "26/12/2022",
            author: "tvl",
            status: "draft",
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
            title: "Title",
            field: "title",
            Cell({ entry: { id, title } }) {
              return (
                <Link to={`${id}`} className="hover:text-sky-600">
                  {title}
                </Link>
              );
            },
          },
          {
            title: "Author",
            field: "author",
          },
          {
            title: "Created At",
            field: "createdAt",
          },
          {
            title: "Status",
            field: "status",
          },
        ]}
      />
    </div>
  );
};
