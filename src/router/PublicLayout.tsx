
import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks';

function PublicLayout() {
  const { isAuth } = useAuth();
  const outlet = useOutlet(); // children routes

  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PublicLayout;
