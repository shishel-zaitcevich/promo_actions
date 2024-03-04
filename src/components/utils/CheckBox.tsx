import { ChangeEvent, forwardRef, useEffect, useState } from 'react';
import '../../assets/styles/checkboxStyles.scss';
import React from 'react';

interface CheckboxProps {
  isChecked: boolean | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // handleChange: () => void;
  id: string;
  error: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ isChecked, handleChange, id, error }, ref) => {
    return (
      <label className="custom-checkbox">
        <input
          className="hidden-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          ref={ref}
        ></input>
        <div className="checkbox">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </div>
      </label>
    );
  }
);

export default Checkbox;
