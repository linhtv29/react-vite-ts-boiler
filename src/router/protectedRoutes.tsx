import LayoutAdmin from "../components/layout/LayoutAdmin";

const Test1 = () => {
  return <div className="text-red-500">test 1</div>;
};
const Test2 = () => {
  return <div className="text-green-500">test 2</div>;
};
const Test3 = () => {
  return <div className="text-yellow-500">test 3</div>;
};
export const protectedRoutes = [
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <Test1 />,
      },
      {
        path: "profile",
        element: <Test2 />,
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
