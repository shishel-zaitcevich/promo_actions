import axios from 'axios';
import { FormDataType } from '../forms/SignUpForm';
import { error } from 'console';

export const formSubmit = async (
  formData: FormDataType,
  reset: () => void,
  handleOpenModal: () => void
) => {
  try {
    console.log('formData', formData);
    const response = await axios.post(
      'https://promo-test.emlsdr.ru/backend/api/registerByEmail',
      formData
    );
    if (response.data.result) {
      console.log('Регистрация успешна!');
      console.log('Пароль:', response.data.data.password);
    } else {
      console.log('Ошибка при регистрации.');
      console.error('Сервер вернул ошибку:', response.data.error);
    }
  } catch (error) {
    console.error('Произошла ошибка при отправке данных на сервер:', error);
  }
};
