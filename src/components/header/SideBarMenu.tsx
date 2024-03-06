import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { slide as Menu, Props } from 'react-burger-menu';
import { Link } from 'react-scroll';

import { Container } from '@mui/material';

import { SignUpForm } from '../forms/SignUpForm';
import CloseButton from '../utils/CloseButton';
import { SuccessMessage } from '../utils/SuccessMessage';
import ModalWindow from '../utils/modalWindow/modalWindow';

import '../../assets/styles/header.scss';
import '../../assets/styles/sideBarMenu.scss';

export function SideBar(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Menu> &
    Readonly<Props>
) {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  const sideBarBtn: NodeListOf<Element> =
    document.querySelectorAll('.bm-burger-bars');
  if (sideBarBtn) {
    if (!isHeaderVisible) {
      sideBarBtn.forEach((element) => {
        element.classList.add('bm-burger-button-color-green');
      });
    } else {
      sideBarBtn.forEach((element) => {
        element.classList.remove('bm-burger-button-color-green');
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById('header')?.offsetHeight ?? 0;
      const windowHeight = window.innerHeight;
      const threshold = headerHeight + windowHeight;
      const scrollTop = window.scrollY;
      if (scrollTop > threshold) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

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

  const buttonClick = () => {
    handleOpenModal();
    closeSideBar();
  };

  return (
    <Menu
      {...props}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <img src="images/palm.png" alt="img" className="sidebar_img" />
      <NavLink to="/" onClick={closeSideBar}>
        ГЛАВНАЯ
      </NavLink>
      <Link
        to="prizes"
        onClick={closeSideBar}
        className={`link`}
        smooth={true}
        duration={2000}
      >
        ПРИЗЫ
      </Link>
      <NavLink to="/how_to_ participate">КАК УЧАСТВОВАТЬ</NavLink>
      <NavLink to="/questions_and_answers">ВОПРОСЫ И ОТВЕТЫ</NavLink>
      <button className={`button_sidebar`} onClick={buttonClick}>
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
