import { Button, Container } from '@mui/material';
import CloseButton from './CloseButton';
import { MouseEvent } from 'react';
import { FormDataType } from '../forms/SignUpForm';
import '../../assets/styles/successStyles.scss';

interface SuccessMessageProps {
  handleCloseModal: () => void;
}

export function SuccessMessage(
  { handleCloseModal }: SuccessMessageProps,
  formdata: FormDataType
) {
  return (
    <Container className="modal_success">
      <CloseButton onClick={handleCloseModal} />
      <img src="images/icon_ok.png" className="success_icon" alt="ico" />
      <h2 className="success_title">ВАША РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h2>
      <p className="success_text">Добро пожаловать, {formdata.name}!</p>
      <button className="signup_button ">ЗАКРЫТЬ ОКНО</button>
    </Container>
  );
}
