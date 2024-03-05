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
      <div className="modal">{children}</div>
    </Modal>
  );
};

export default ModalWindow;
