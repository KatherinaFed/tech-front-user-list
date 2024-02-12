import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { formSignupValidation } from '../../helpers/formValidation';
import errorsMsg from '../../helpers/errorsMsg';
import './Signup.scss';
import { useRegisterMutation } from '../../service/authApi';
import { useAppDispatch, useAuth } from '../../app/hooks';
import { setCredentials } from '../../features/authSlice';

interface Toggle {
  password: boolean;
  confPassword: boolean;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const [toggle, setToggle] = useState<Toggle>({
    password: false,
    confPassword: false,
  });

  const [register, { data, isSuccess, isError }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const { setIsAuth } = useAuth();

  const handleToggle = (field: keyof Toggle) => {
    setToggle((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: formSignupValidation,
    onSubmit: async (values) => {
      await register(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials(data));
      setIsAuth(true);
    }
  }, [isSuccess, data]);

  return (
    <div className="signup_container">
      <div className="signup_wrapper">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup_group">
            <label htmlFor="name">
              Имя
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={values.name}
              />
              {errorsMsg(errors.name, touched.name)}
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="email">
              Электронная почта
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
                value={values.email}
              />
              {errorsMsg(errors.email, touched.email)}
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="password">
              Пароль
              <input
                type={toggle.password ? 'text' : 'password'}
                name="password"
                id="password"
                required
                onChange={handleChange}
                value={values.password}
              />
              <i
                onClick={() => handleToggle('password')}
                className={`fa fa-eye${
                  toggle.password ? '' : '-slash'
                } password_toggle`}
                aria-hidden="true"
              ></i>
              {errorsMsg(errors.password, touched.password)}
            </label>
          </div>
          <div className="signup_group">
            <label htmlFor="confirmPassword">
              Подтвердите пароль
              <input
                type={toggle.confPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                required
                onChange={handleChange}
                value={values.confirmPassword}
              />
              <i
                onClick={() => handleToggle('confPassword')}
                className={`fa fa-eye${
                  toggle.confPassword ? '' : '-slash'
                } password_toggle`}
                aria-hidden="true"
              ></i>
              {errorsMsg(errors.confirmPassword, touched.confirmPassword)}
            </label>
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
