import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';
import { FormDataType } from '../forms/SignUpForm';

interface FormDataContextType {
  formData: FormDataType;
  setFormData: Dispatch<React.SetStateAction<FormDataType>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    login: '',
    phone: '',
    rules1: false,
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
