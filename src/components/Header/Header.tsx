import './Header.scss';
import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/authSlice';

function Header() {
  
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div className="header_signout">
          <button type="button" onClick={handleLogout}>
            Выход
          </button>
        </div>
        <div className="header_text">
          <h1>Наша команда</h1>
          <h2>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся <br /> на их плечи, и умеющие находить выход из
            любых, даже самых сложных ситуаций.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
