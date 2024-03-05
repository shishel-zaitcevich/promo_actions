import React, { MouseEvent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface CloseButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <IconButton aria-label="close" onClick={onClick}>
      <CloseIcon className="MuiSvgIcon-fontSizeLarge" />
    </IconButton>
  );
};

export default CloseButton;
