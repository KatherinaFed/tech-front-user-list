import * as Yup from 'yup';

export const formSignupValidation = Yup.object().shape({
  name: Yup.string().required('Необходимо ввести имя'),
  email: Yup.string().email().required('Электронная почта обязательна'),
  password: Yup.string()
    .required('Необходимо ввести пароль')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароль должен совпадать')
    .required('Необходимо подтверждение пароля'),
});

export const formLoginValidation = Yup.object().shape({
  email: Yup.string().email().required('Электронная почта обязательна'),
  password: Yup.string()
    .required('Необходимо ввести пароль')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
});
