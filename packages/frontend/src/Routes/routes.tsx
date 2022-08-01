import { RouteObject } from "react-router-dom";
import Base from "../Base/base";
import Error404 from "../Error/404";
import Quiz from "../quiz";

export default function Routes(): RouteObject[] {
  return [
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: "quiz/:id",
          element: <Quiz />,
        },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];
}
