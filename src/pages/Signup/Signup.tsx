import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div className="signup_container">
      <div className="signup_wrapper">
        <h2>Регистрация</h2>
        <form action="submit">
          <div className="signup_group">
            <label htmlFor="name">
              Имя
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="email">
              Электронная почта
              <input type="email" name="email" id="email" />
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="password">
              Пароль
              <input type="password" name="password" id="password" />
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="confirmPassword">
              Подтвердите пароль
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </label>
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
