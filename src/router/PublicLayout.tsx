import { Navigate, useOutlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

function PublicLayout() {
  const { isAuth } = useAppSelector((state) => state.auth);

  const outlet = useOutlet(); // children routes
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PublicLayout;
