import { Container } from '@mui/material';

import CloseButton from './CloseButton';
import { useFormData } from '../context/formContext';

import '../../assets/styles/successStyles.scss';

interface SuccessMessageProps {
  handleCloseModal: () => void;
}

export function SuccessMessage({ handleCloseModal }: SuccessMessageProps) {
  const { formData } = useFormData();

  return (
    <Container className="modal_success">
      <CloseButton onClick={handleCloseModal} />
      <img src="images/icon_ok.png" className="success_icon" alt="ico" />
      <h2 className="success_title">ВАША РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!</h2>
      <p className="success_text">Добро пожаловать, {formData.name}!</p>
      <button className="signup_button" onClick={handleCloseModal}>
        ЗАКРЫТЬ ОКНО
      </button>
    </Container>
  );
}
