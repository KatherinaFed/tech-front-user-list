import React, { useState } from 'react';
import './Signup.scss';

interface Toggle {
  password: boolean;
  confPassword: boolean;
}

function Signup() {
  const [toggle, setToggle] = useState<Toggle>({
    password: false,
    confPassword: false,
  });

  const handleToggle = (field: keyof Toggle) => {
    setToggle((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

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
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="password">
              Пароль
              <input type="password" name="password" id="password" required />
              <i
                onClick={() => handleToggle('password')}
                className={`fa fa-eye${
                  toggle.password ? '-slash' : ''
                } password_toggle`}
                aria-hidden="true"
              ></i>
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="confirmPassword">
              Подтвердите пароль
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
              <i
                onClick={() => handleToggle('confPassword')}
                className={`fa fa-eye${
                  toggle.confPassword ? '-slash' : ''
                } password_toggle`}
                aria-hidden="true"
              ></i>
            </label>
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
