import './Header.scss';
import { useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/authSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../service/usersApi';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const { data } = useGetUserByIdQuery(id);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div className="header_buttons">
          {pathname !== '/' && (
            <div className="left_btn">
              <button type="button" onClick={() => navigate('/')}>
                Назад
              </button>
            </div>
          )}
          <div className="right_btn">
            <button type="button" onClick={handleLogout}>
              Выход
            </button>
          </div>
        </div>
        <div className="header_content">
          {id ? (
            <div className="header_user">
              <div className="header_user_avatar">
                <img src={data?.data.avatar} alt="user_avatar" />
              </div>
              <div className="header_user_name">
                <h1>{`${data?.data.first_name} ${data?.data.last_name}`}</h1>
                <p>Партнер</p>
              </div>
            </div>
          ) : (
            <div className="header_main">
              <h1>Наша команда</h1>
              <h2>
                Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                которые ложатся <br /> на их плечи, и умеющие находить выход из
                любых, даже самых сложных ситуаций.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
