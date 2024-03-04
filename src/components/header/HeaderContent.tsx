import { Container } from '@mui/material';
import ModalWindow from '../utils/modalWindow/modalWindow';
import CloseButton from '../utils/CloseButton';
import { SignUpForm } from '../forms/SignUpForm';
import { useState } from 'react';

export function HeaderContent() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };
  const onFormSubmitAction = () => {
    setIsSuccessModalOpen(true);
    setIsFormModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFormModalOpen(false);
  };

  return (
    <section className="header_content">
      <div className="bottle_img"></div>
      <div className="title_container">
        <h1 className="title">УЧАСТВУЙ В АКЦИИ И ВЫИГРЫВАЙ ПРИЗЫ!</h1>
        <button className="button_title" onClick={handleOpenModal}>
          УЧАСТВОВАТЬ
        </button>
        <ModalWindow isOpen={isFormModalOpen} onClose={handleCloseModal}>
          <Container className="form_container">
            <CloseButton onClick={handleCloseModal} />
            <SignUpForm onFormSubmitAction={onFormSubmitAction} />
          </Container>
        </ModalWindow>
      </div>
      <div className="prizes_imgs">
        <div className="card"></div>
        <div className="super"></div>
      </div>
    </section>
  );
}
