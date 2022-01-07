import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoutes({ children, ...routeProps }) {
  const isLoggedIn = false;
  const user = isLoggedIn ? { id: 1, email: 'dan@alchemycodelab.com' } : null;

  return (
    <Route {...routeProps}>{user ? children : <Redirect to="/login" />}</Route>
  );
}
