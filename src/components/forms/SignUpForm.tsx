import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';
// import { PHONENUMBERREGEXP, REQUIRED } from '../utils/variables';
// import { onSubmit } from '../utils/formFunctions';
// import { FormDataType } from '../types/iksTypes';

// import './headerForm.scss';

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  agree: boolean;
}

interface FormProps {
  className?: string;
  onFormSubmitAction?: () => void;
}

export const SignUpForm: React.FC<FormProps> = ({
  className,
  onFormSubmitAction,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    control,
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      agree: true,
    },
  });

  // const formId = 'header_form';

  const PHONENUMBERREGEXP = /^\d{10}$/;
  const EMAILREGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const REQUIRED = 'Это поле обязательно для заполнения';
  const WRONGINPUT = 'Неверный формат ввода поля';

  const resetForm = () => {
    resetField('name');
    resetField('email');
    resetField('phone');
  };

  // const handleFormSubmit = () => {
  //   if (onFormSubmitAction) {
  //     handleSubmit((formData) =>
  //       onSubmit(formData, resetForm, onFormSubmitAction, formId)
  //     )();
  //     console.log('Form submitted on mobile');
  //   }
  // };

  const handleFocus = () => setIsFocused(true);

  return (
    <form
      // onSubmit={handleSubmit(handleFormSubmit)}
      className="form"
      // id="header_form"
      // style={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'flex-start',
      // }}
    >
      <h3 className="form_title">РЕГИСТРАЦИЯ</h3>
      <div className="input_container">
        <div className="input_block ">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                label="ФИО"
                placeholder="Введите ФИО"
                {...field}
                fullWidth
                variant="outlined"
                margin="normal"
                {...register('name', {
                  required: REQUIRED,
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                // sx={{
                //   marginRight: '16px',
                //   '&:hover .MuiOutlinedInput-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                //   '&.Mui-focused .MuiTextField-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                // }}
              />
            )}
          />
        </div>

        <div className="input_block ">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label="E-mail"
                placeholder={isFocused ? '' : 'Введите e-mail'}
                {...field}
                onFocus={handleFocus}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {isFocused && '+7'}
                    </InputAdornment>
                  ),
                }}
                {...register('phone', {
                  required: REQUIRED,
                  pattern: {
                    value: EMAILREGEXP,
                    message: WRONGINPUT,
                  },
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                // sx={{
                //   marginRight: '16px',
                //   '&:hover .MuiOutlinedInput-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                //   '&.Mui-focused .MuiOutlinedInput-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                // }}
              />
            )}
          />
        </div>

        <div className="input_block ">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                placeholder={isFocused ? '' : '+7'}
                {...field}
                onFocus={handleFocus}
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {isFocused && '+7'}
                    </InputAdornment>
                  ),
                }}
                {...register('phone', {
                  required: REQUIRED,
                  pattern: {
                    value: PHONENUMBERREGEXP,
                    message: WRONGINPUT,
                  },
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                // sx={{
                //   marginRight: '16px',
                //   '&:hover .MuiOutlinedInput-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                //   '&.Mui-focused .MuiOutlinedInput-root': {
                //     '& fieldset': {
                //       borderColor: 'rgb(137, 9, 7)',
                //     },
                //   },
                // }}
              />
            )}
          />
        </div>

        <div className="checkbox_container">
          <Controller
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    // sx={{
                    //   '& .MuiSvgIcon-root': { fontSize: 28 },
                    //   color: '#1F2F5C',
                    // }}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label=""
              />
            )}
            name="agree"
            control={control}
            rules={{ required: REQUIRED }}
          />
          <p className="checkbox_text">
            Я согласен с
            <a href="#" className="checkbox_link">
              правилами акции, пользовательским соглашением и с положением о
              конфиденциальности
            </a>
          </p>
        </div>
      </div>
      <button className=" button_footer button_link header_form_button">
        Зарегистрироваться
      </button>
      <p className="login_text">
        Есть аккаунт?
        <a href="#" className="ligin_text__link">
          Авторизуйся
        </a>
      </p>
      <div />
    </form>
  );
};
