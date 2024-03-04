import {
  ChangeEvent,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import '../../assets/styles/checkboxStyles.scss';
import React from 'react';

// interface CheckboxProps extend HTMLAttributes<HTMLInputElement> {
//   // isChecked: boolean | undefined;
//   // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   // handleChange: () => void;

//   id: string;
//   // error: boolean;
// }

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  checked?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, checked, ...rest }, ref) => {
    // const [checked, setChecked] = useState(false);
    // useEffect(() => {
    //   if (onChange) {
    //     onChange(checked);
    //   }
    // }, []);
    return (
      <label className="custom-checkbox">
        <input
          className="hidden-checkbox"
          type="checkbox"
          // checked={checked}
          {...rest}
          // value={checked??false}
          // onChange={(e) => {
          //   setChecked(e.target.checked);
          // }}
          // checked={isChecked}
          // onChange={handleChange}
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
