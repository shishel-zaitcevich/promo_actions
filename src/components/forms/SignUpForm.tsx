import React, { ChangeEvent, useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import { FormHelperText, InputLabel } from '@mui/material';
import { Grid } from '@mui/material';

import { formSubmit } from '../utils/formSubmit';
import Checkbox from '../utils/CheckBox';
import { useFormData } from '../context/formContext';

import '../../assets/styles/signUpForm.scss';

export interface FormDataType {
  name: string;
  login: string;
  phone: string;
  rules1: boolean;
}

export interface backendErrorsType {
  name?: string[];
  login?: string[];
  phone?: string[];
  rules1?: string[];
}

interface FormProps {
  onFormSubmitAction?: () => void;
}

export const SignUpForm: React.FC<FormProps> = ({ onFormSubmitAction }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [backendErrors, setBackendErrors] = useState<backendErrorsType>({});
  const { setFormData } = useFormData();

  const {
    control,
    handleSubmit,
    register,
    resetField,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useForm<FormDataType>({
    defaultValues: {
      name: '',
      phone: '',
      login: '',
      rules1: false,
    },
  });
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    if (backendErrors && isFocused) {
      setBackendErrors({});
    }
  }, [backendErrors]);

  const PHONENUMBERREGEXP = /^\+7\d{10}$/;
  const EMAILREGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const WRONGINPUT = 'Неверный формат ввода поля';

  const resetForm = () => {
    resetField('name');
    resetField('login');
    resetField('phone');
    resetField('rules1');
  };

  const handleFormSubmit = async (formData: FormDataType) => {
    if (onFormSubmitAction) {
      // const data = {
      //   ...formData,
      //   rules1:
      //     typeof formData.rules1 === 'string'
      //       ? JSON.parse(formData.rules1)
      //       : formData.rules1,
      // };

      setFormData(formData);
      formSubmit(formData, resetForm, onFormSubmitAction);
      const response: backendErrorsType | undefined = await formSubmit(
        formData,
        resetForm,

        onFormSubmitAction
      );
      if (response) {
        setBackendErrors(response);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <h3 className="form_title">РЕГИСТРАЦИЯ</h3>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <InputLabel shrink className="input_label">
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={!!errors.name}
                />
                <FormHelperText
                  className={
                    errors.name || backendErrors ? 'custom_helper_text' : ''
                  }
                >
                  {errors.name?.message ||
                    (isFocused ? '' : backendErrors.name?.join(', '))}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item>
          <InputLabel shrink className="input_label">
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={!!errors.login}
                />
                <FormHelperText
                  className={errors.login ? 'custom_helper_text' : ''}
                >
                  {errors.login?.message ||
                    (isFocused ? '' : backendErrors.login?.join(', '))}
                </FormHelperText>
              </>
            )}
          />
        </Grid>

        <Grid item>
          <InputLabel shrink className="input_label">
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  error={!!errors.phone}
                />
                <FormHelperText
                  className={errors.phone ? 'custom_helper_text' : ''}
                >
                  {errors.phone?.message ||
                    (isFocused ? '' : backendErrors.phone?.join(', '))}
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
            defaultValue={false}
            render={({ field }) => (
              <>
                <Checkbox
                  checked={field.value}
                  {...field}
                  {...register('rules1', {
                    required: 'Необходимо принять условия.',
                  })}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setValue('rules1', e.target.checked);
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <FormHelperText
                  className={errors.rules1 ? 'custom_helper_text' : ''}
                >
                  {getValues('rules1') ? '' : errors.rules1?.message}
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
