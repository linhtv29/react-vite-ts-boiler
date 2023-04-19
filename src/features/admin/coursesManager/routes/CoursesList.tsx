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
      <Table<CoursesList>
        data={[{
					id: "1",
					title: "bai 1",
					createdAt: "26/10/2022",
					author: "tvl",
					status: "draft" 
				}]}
        columns={[
          {
            title: "Id",
            field: "id",
            Cell({ entry: { id } }) {
            return <Link to={`${id}`}>{id}</Link>;
          },
          },
          {
            title: "Title",
            field: "title",
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
