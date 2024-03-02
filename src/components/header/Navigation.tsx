import { NavLink } from 'react-router-dom';
import { SideBar } from './SideBarMenu';
import ModalWindow from '../utils/modalWindow/modalWindow';
import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { SignUpForm } from '../forms/SignUpForm';

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
  if (window.innerWidth >= 1366) {
    return (
      <nav className="nav">
        <NavLink className={`link `} to="/">
          ГЛАВНАЯ
        </NavLink>
        <NavLink to="/prizes" className={`link`}>
          ПРИЗЫ
        </NavLink>
        <NavLink to="/how_to_ participate" className={`link`}>
          КАК УЧАСТВОВАТЬ
        </NavLink>
        <NavLink to="/questions_and_answers" className={`link `}>
          ВОПРОСЫ И ОТВЕТЫ
        </NavLink>
        <button className={`button`} onClick={handleOpenModal}>
          ЛИЧНЫЙ КАБИНЕТ
        </button>
        <ModalWindow isOpen={isFormModalOpen} onClose={handleCloseModal}>
          <div className="modal_content">
            <Container className="">
              <Button
                // id="cross_button"
                // className="header_form_button_close"
                // style={{
                //   position: 'absolute',
                //   left: '444px',
                //   top: '3%',
                //   outline: 'none!important',
                // }}
                onClick={handleCloseModal}
              >
                <img
                  src="assets/icons/cross-icon.svg"
                  alt="cross-icon"
                  style={{ width: 30 }}
                />
              </Button>
              {/* <HeaderForm onFormSubmitAction={onFormSubmitAction} /> */}
              <SignUpForm onFormSubmitAction={onFormSubmitAction} />
            </Container>
          </div>
        </ModalWindow>
        {/* <ModalWindow
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      >
        <SuccessMessage handleCloseModal={handleCloseSuccessModal} />
      </ModalWindow> */}
      </nav>
    );
  } else {
    return (
      <SideBar
        isOpen={false}
        right={true}
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      />
    );
  }
}
