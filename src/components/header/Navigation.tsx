import { NavLink } from 'react-router-dom';

export function Navigation() {
  if (window.innerWidth >= 1366) {
    return (
      <nav className="nav">
        <NavLink className={`link `} to="/">
          ГЛАВНАЯ
        </NavLink>
        <NavLink to="/prizes" className={`link`}>
          ПРИЗЫ
        </NavLink>
        <NavLink to="/how_t_ participate" className={`link`}>
          КАК УЧАСТВОВАТЬ
        </NavLink>
        <NavLink to="/questions_and_answers" className={`link `}>
          ВОПРОСЫ И ОТВЕТЫ
        </NavLink>
        <button
          className={`button`}
          // onClick={handleOpenModal}
        >
          ЛИЧНЫЙ КАБИНЕТ
        </button>
        {/* <ModalWindow isOpen={isFormModalOpen} onClose={handleCloseModal}>
        <div className="modal_content">
          <Container className="">
            <Button
              id="cross_button"
              className="header_form_button_close"
              style={{
                position: 'absolute',
                left: '444px',
                top: '3%',
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
      </nav>
    );
  } else {
    return (
      // <SideBar
      //   isOpen={false}
      //   right={true}
      //   pageWrapId={'page-wrap'}
      //   outerContainerId={'App'}
      // />
      <div></div>
    );
  }
}
