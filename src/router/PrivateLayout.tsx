import { Navigate, useOutlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

function PrivateLayout() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const outlet = useOutlet(); // children routes
  
  if (!isAuth) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PrivateLayout;
