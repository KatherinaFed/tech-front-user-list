import React from 'react';
import { useOutlet } from 'react-router-dom';

function PrivateLayout() {
  const outlet = useOutlet();
  return <>{outlet}</>;
}

export default PrivateLayout;
