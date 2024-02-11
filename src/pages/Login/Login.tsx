import { useState } from 'react';
import { useFormik } from 'formik';
import { formLoginValidation } from '../../helpers/formValidation';
import errorsMsg from '../../helpers/errorsMsg';

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const [toggle, setToggle] = useState<boolean>(false);

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: formLoginValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login_container">
      <div className="login_wrapper">
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <div className="login_group">
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
          <div className="login_group">
            <label htmlFor="password">
              Пароль
              <input
                type={toggle ? 'text' : 'password'}
                name="password"
                id="password"
                required
                onChange={handleChange}
                value={values.password}
              />
              <i
                onClick={() => setToggle(!toggle)}
                className={`fa fa-eye${
                  toggle ? '' : '-slash'
                } password_toggle`}
                aria-hidden="true"
              ></i>
              {errorsMsg(errors.password, touched.password)}
            </label>
          </div>
          
          <button type="button">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
