import MainLayout from "../components/layout/MainLayout";
import { Profile } from "@/features/profile/routes";
import { Dashboard } from "@/features/dashboard/routes";

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
        path: "courses",
        element: <Test3 />,
        children: [
          {
            path: "course1",
            element: <Test1 />,
          },
          {
            path: "course2",
            element: <Test2 />,
          },
        ],
      },
    ],
  },
];
