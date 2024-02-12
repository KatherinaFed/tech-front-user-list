import { Navigate, useOutlet } from 'react-router-dom';

function PrivateLayout() {
  const userCredentials = localStorage.getItem('userCredentials')
  const outlet = useOutlet(); // children routes

  if (!userCredentials) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PrivateLayout;
