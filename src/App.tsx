import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup/Signup';
import PrivateLayout from './router/PrivateLayout';
import PublicLayout from './router/PublicLayout';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Main />}>
              <Route path="users/:id" element={<User />} />
            </Route>
          </Route>
          <Route element={<PublicLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
