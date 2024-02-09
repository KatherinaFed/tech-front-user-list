import './Header.scss';

function Header() {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div className="header_signout">
          <button type="button">Выход</button>
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
