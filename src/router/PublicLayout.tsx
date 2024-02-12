
import { Navigate, useOutlet } from 'react-router-dom';

function PublicLayout() {
  const userCredentials = localStorage.getItem('userCredentials')
  const outlet = useOutlet(); // children routes

  if (userCredentials) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{outlet}</>;
}

export default PublicLayout;
