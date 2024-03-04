import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormHelperText, InputAdornment, InputLabel } from '@mui/material';
import { FormControlLabel, Grid } from '@mui/material';
import '../../assets/styles/signUpForm.scss';

import { formSubmit } from '../utils/formSubmit';
import Checkbox from '../utils/CheckBox';

export interface FormDataType {
  name: string;
  login: string;
  phone: string;
  rules1: boolean;
}

interface FormProps {
  onFormSubmitAction?: () => void;
}

export const SignUpForm: React.FC<FormProps> = ({ onFormSubmitAction }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
      login: '',
      rules1: false,
    },
  });

  const PHONENUMBERREGEXP = /^\+7\d{10}$/;
  const EMAILREGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const WRONGINPUT = 'Неверный формат ввода поля';

  // console.log('isChecked', isChecked);
  // useEffect(() => {
  //   handleCheckboxChange();
  // }, []);
  console.log('initial', isChecked);
  // const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log('first', isChecked);
  //   setIsChecked(e.target.checked);
  //   console.log('after', e.target.checked);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked; // Инвертируем текущее значение isChecked
    setIsChecked(newCheckedValue); // Обновляем состояние isChecked
  };

  // if (isChecked === false) {
  //   setIsChecked(true);
  //   console.log('(isChecked === false) {', isChecked);
  // } else {
  //   setIsChecked(false);
  //   console.log('(isChecked === true) {', isChecked);
  // }
  // };

  // const handleCheckboxChange = (isChecked: boolean) => {
  //   console.log('handleCheckboxChange is called'); // добавьте этот console.log
  //   console.log('first', isChecked);
  //   setIsChecked(!isChecked);
  //   console.log('setischecked', isChecked);
  // };

  const resetForm = () => {
    resetField('name');
    resetField('login');
    resetField('phone');
    resetField('rules1');
  };

  // const handleFormSubmit = () => {
  //   if (onFormSubmitAction) {
  //     handleSubmit((formData) =>
  //       formSubmit(formData, resetForm, onFormSubmitAction)
  //     )();

  //     console.log('Form submitted');
  //     console.log('isChecked', isChecked);
  //   }
  // };

  const handleFormSubmit = (formData: FormDataType) => {
    console.log('handleFormSubmit', formData.rules1);
    if (onFormSubmitAction) {
      formSubmit(formData, resetForm, onFormSubmitAction);
      console.log('Form submitted');
      console.log('isChecked', formData.rules1); // Здесь получите значение из поля rules1
    }
  };
  const handleFocus = () => setIsFocused(true);

  return (
    // <form
    //   onSubmit={handleSubmit((data) => handleFormSubmit(data))}
    //   className="form"
    // >
    // <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
    <form
      onSubmit={handleSubmit((formData) => handleFormSubmit(formData))}
      className="form"
    >
      <h3 className="form_title">РЕГИСТРАЦИЯ</h3>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <InputLabel
            shrink
            // htmlFor="name"
            className="input_label"
          >
            ФИО
          </InputLabel>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  placeholder="Введите ФИО"
                  {...field}
                  id="name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...register('name', {
                    required: 'Необходимо заполнить «Имя».',
                  })}
                  error={!!errors.name}
                />
                <FormHelperText
                  className={errors.name ? 'custom_helper_text' : ''}
                >
                  {errors.name?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item>
          <InputLabel
            shrink
            // htmlFor="login"
            className="input_label"
          >
            E-mail
          </InputLabel>
          <Controller
            name="login"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  placeholder="Введите e-mail"
                  {...field}
                  id="email"
                  onFocus={handleFocus}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...register('login', {
                    required: 'Необходимо заполнить «E-mail».',
                    pattern: {
                      value: EMAILREGEXP,
                      message: WRONGINPUT,
                    },
                  })}
                  error={!!errors.login}
                />
                <FormHelperText
                  className={errors.login ? 'custom_helper_text' : ''}
                >
                  {errors.login?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item>
          <InputLabel
            shrink
            //  htmlFor="phone"
            className="input_label"
          >
            Телефон
          </InputLabel>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  placeholder={'+7'}
                  {...field}
                  // onFocus={handleFocus}
                  id="phone"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  {...register('phone', {
                    required: 'Необходимо заполнить «Телефон».',
                    pattern: {
                      value: PHONENUMBERREGEXP,
                      message: WRONGINPUT,
                    },
                  })}
                  error={!!errors.phone}
                />
                <FormHelperText
                  className={errors.phone ? 'custom_helper_text' : ''}
                >
                  {errors.phone?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <div className="checkbox_container">
          <InputLabel shrink className="input_label"></InputLabel>
          <Controller
            name="rules1"
            control={control}
            // rules={{ required: 'Необходимо принять условия.' }}
            render={({ field }) => (
              <>
                <Checkbox
                  isChecked={isChecked}
                  handleChange={handleCheckboxChange}
                  {...field}
                  id="rules1"
                  {...register('rules1', {
                    required: 'Необходимо принять условия.',
                  })}
                  error={!isChecked && !!errors.rules1}
                />
                <FormHelperText
                  className={errors.rules1 ? 'custom_helper_text' : ''}
                >
                  {isChecked ? '' : errors.rules1?.message}
                </FormHelperText>
              </>
            )}
          />
          <p className="checkbox_text">
            Я согласен с{' '}
            <a href="#" className="checkbox_link">
              правилами акции,
            </a>{' '}
            <a href="#" className="checkbox_link">
              пользовательским соглашением
            </a>{' '}
            и с{' '}
            <a href="#" className="checkbox_link">
              положением о конфиденциальности
            </a>
          </p>
        </div>
        <button className="signup_button ">Зарегистрироваться</button>
        <p className="login_text">
          Есть аккаунт?{' '}
          <a href="#" className="login_text__link">
            Авторизуйся
          </a>
        </p>
        <div />
      </Grid>
    </form>
  );
};
