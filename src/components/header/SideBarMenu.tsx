import React, { useEffect, useState } from 'react';
import { slide as Menu, Props } from 'react-burger-menu';
import '../../assets/styles/sideBarMenu.scss';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/styles/header.scss';
import ModalWindow from '../utils/modalWindow/modalWindow';
import { Container } from '@mui/material';
import { SignUpForm } from '../forms/SignUpForm';
import CloseButton from '../utils/CloseButton';
import { SuccessMessage } from '../utils/SuccessMessage';

// import ModalWindow from '../utils/modalWindow';
// import { Button, Container } from '@mui/material';
// import { HeaderForm } from './HeaderForm';
// import { SuccessMessage } from '../utils/SuccessMessage';

export function SideBar(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Menu> &
    Readonly<Props>
) {
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
    <Menu {...props} className="sideBar_menu">
      <img src="images/palm.png" alt="img" className="sidebar_img" />
      <NavLink to="/">ГЛАВНАЯ</NavLink>
      <NavLink to="/prizes">ПРИЗЫ</NavLink>
      <NavLink to="/how_to_ participate">КАК УЧАСТВОВАТЬ</NavLink>
      <NavLink to="/questions_and_answers">ВОПРОСЫ И ОТВЕТЫ</NavLink>
      <button className={`button_sidebar`} onClick={handleOpenModal}>
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
    </Menu>
  );
}
