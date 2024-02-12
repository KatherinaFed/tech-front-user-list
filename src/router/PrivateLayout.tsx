import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks';

function PrivateLayout() {
  const { isAuth } = useAuth();
  const outlet = useOutlet(); // children routes

  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PrivateLayout;
