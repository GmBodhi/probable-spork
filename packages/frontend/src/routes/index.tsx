import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from './routes';

function Route() {
  return useRoutes(Routes());
}

export default function Router() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
