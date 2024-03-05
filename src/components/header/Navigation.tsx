import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SideBar } from './SideBarMenu';
import { Link } from 'react-scroll';
import { Container } from '@mui/material';

import ModalWindow from '../utils/modalWindow/modalWindow';
import { SignUpForm } from '../forms/SignUpForm';
import CloseButton from '../utils/CloseButton';
import { SuccessMessage } from '../utils/SuccessMessage';

export function Navigation() {
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
    <>
      <nav className="nav">
        <NavLink className={`link `} to="/">
          ГЛАВНАЯ
        </NavLink>
        <Link to="prizes" className={`link`} smooth={true} duration={2000}>
          ПРИЗЫ
        </Link>
        <NavLink to="/participate" className={`link`}>
          КАК УЧАСТВОВАТЬ
        </NavLink>
        <NavLink to="/questions_and_answers" className={`link `}>
          ВОПРОСЫ И ОТВЕТЫ
        </NavLink>
        <button className={`button`} onClick={handleOpenModal}>
          ЛИЧНЫЙ КАБИНЕТ
        </button>

        <ModalWindow isOpen={isFormModalOpen} onClose={handleCloseModal}>
          <Container className="form_container">
            <CloseButton onClick={handleCloseModal} />
            <SignUpForm onFormSubmitAction={onFormSubmitAction} />
          </Container>
        </ModalWindow>
        <ModalWindow
          isOpen={isSuccessModalOpen}
          onClose={handleCloseSuccessModal}
        >
          <SuccessMessage handleCloseModal={handleCloseSuccessModal} />
        </ModalWindow>
      </nav>
      <SideBar
        isOpen={false}
        right={true}
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      />
    </>
  );
}
