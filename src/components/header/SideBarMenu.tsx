import React, { useEffect, useState } from 'react';
import { slide as Menu, Props } from 'react-burger-menu';
import '../../assets/styles/sideBarMenu.scss';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/styles/header.scss';

// import ModalWindow from '../utils/modalWindow';
// import { Button, Container } from '@mui/material';
// import { HeaderForm } from './HeaderForm';
// import { SuccessMessage } from '../utils/SuccessMessage';

export function SideBar(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Menu> &
    Readonly<Props>
) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('modal window is open');
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };
  const onFormSubmitAction = () => {
    setIsSuccessModalOpen(true);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const sideBarIcon: HTMLElement | null =
      document.querySelector('.bm-burger-button');
    if (location.pathname.includes('/medicine') && sideBarIcon !== null) {
      sideBarIcon.style.background = 'rgb(44, 104, 158)';
    }
  }, []);

  return (
    <Menu {...props} className="sideBar_menu">
      <img src="images/palm.png" alt="img" className="sidebar_img" />
      <NavLink to="/">ГЛАВНАЯ</NavLink>
      <NavLink to="/prizes">ПРИЗЫ</NavLink>
      <NavLink to="/how_to_ participate">КАК УЧАСТВОВАТЬ</NavLink>
      <NavLink to="/questions_and_answers">ВОПРОСЫ И ОТВЕТЫ</NavLink>
      <button
        className={`button_sidebar`}
        // onClick={handleOpenModal}
      >
        ЛИЧНЫЙ КАБИНЕТ
      </button>
      {/* <ModalWindow isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal_content">
          <Container>
            <Button
              style={{
                position: 'absolute',
                top: '4%',
                left: 444,
                outline: 'none!important',
              }}
              onClick={handleCloseModal}
            >
              <img
                src="assets/icons/cross-icon.svg"
                alt="cross-icon"
                style={{ width: 30 }}
              />
            </Button>
            <HeaderForm onFormSubmitAction={onFormSubmitAction} />
          </Container>
        </div>
      </ModalWindow>
      <ModalWindow
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      >
        <SuccessMessage handleCloseModal={handleCloseSuccessModal} />
      </ModalWindow> */}
    </Menu>
  );
}
