import React from 'react';
import { Modal } from '@mui/material';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div
        className="modal"
        // style={{
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%, -50%)',
        //   width: 400,
        //   backgroundColor: 'background.paper',
        //   boxShadow: '24',
        //   // p: 4,
        //   borderRadius: '8px',
        //   border: 'none',
        // }}
      >
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
