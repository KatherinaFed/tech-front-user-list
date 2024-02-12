import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { formLoginValidation } from '../../helpers/formValidation';
import errorsMsg from '../../helpers/errorsMsg';
import { Link } from 'react-router-dom';
import './Login.scss';
import { useLoginMutation } from '../../service/authApi';
import { useAppDispatch } from '../../app/hooks';
import { setCredentials } from '../../features/authSlice';

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [login, { data, isSuccess, isError }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: formLoginValidation,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await login(values);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials({ token: data.token, isAuth: true }));
    }
  }, [isSuccess]);

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
                className={`fa fa-eye${toggle ? '' : '-slash'} password_toggle`}
                aria-hidden="true"
              ></i>
              {errorsMsg(errors.password, touched.password)}
            </label>
          </div>
          <div className="login_to_singup">
            Новый пользователь? <Link to={'/signup'}>Зарегистрируйтесь</Link>
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
