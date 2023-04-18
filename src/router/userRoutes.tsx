import MainLayout from "../components/layout/MainLayout";
import { Profile } from "@/features/profile/routes";
import { Dashboard } from "@/features/dashboard/routes";
import { CoursesList } from "@/features/admin/coursesManager/routes";

const Test1 = () => {
  return <div className="text-red-500">test 1</div>;
};
const Test2 = () => {
  return <div className="text-green-500">test 2</div>;
};
const Test3 = () => {
  return <div className="text-yellow-500">test 3</div>;
};
export const userRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "user",
        children: [
          {
            path: "",
            element: <Profile />,
          },
        ],
      },
      {
        path: "courses",
        children: [
          {
            path: "",
            element: <CoursesList />
          },
        ],
      },
    ],
  },
];
