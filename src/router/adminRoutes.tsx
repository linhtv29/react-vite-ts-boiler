import MainLayout from "../components/layout/MainLayout";
import { Profile } from "@/features/profile/routes";
import { Dashboard } from "@/features/dashboard/routes";
import { CoursesList } from "@/features/admin/coursesManager/routes";
import { UsersList, RoleSettings } from "@/features/admin/usersAdmin/routes";

const Test2 = () => {
  return <div className="text-green-500">test 2</div>;
};
export const adminRoutes = [
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "users",
        children: [
          {
            path: "list",
            element: <UsersList />,
          },
          {
            path: "role",
            element: <RoleSettings />,
          },
        ],
      },
      {
        path: "courses",
        children: [
          {
            path: "",
            element: <CoursesList />,
          },
        ],
      },
    ],
  },
];
