import LayoutAdmin from "../components/layout/LayoutAdmin";

const Test1 = () => {
	return (
		<div className="text-red-500">test 1</div>
	)
}
const Test2 = () => {
	return (
		<div className="text-green-500">test 2</div>
	)
}
export const protectedRoutes = [
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "test1",
        element: <Test1/>,
      },
      {
        path: "test2",
        element: <Test2/>,
      },
    ],
  },
];
