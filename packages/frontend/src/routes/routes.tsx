import { RouteObject } from 'react-router-dom';
import About from '../about';
import Base from '../base/base';
import Browse from '../browse';
import Create from '../create';
import Error404 from '../error/404';
import Quiz from '../quiz';

export default function Routes(): RouteObject[] {
  return [
    {
      path: '/',
      element: <Base />,
      children: [
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'quiz/:id',
          element: <Quiz />,
        },
        {
          path: 'browse',
          element: <Browse />,
        },
        {
          path: 'create',
          element: <Create />,
        },
        {
          path: 'create/:id',
          element: <Create />,
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ];
}
