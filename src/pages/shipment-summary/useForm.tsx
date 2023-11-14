import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormValues, IPart } from '@/shared/models.ts';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubmitOrderMutation } from '@/app/store/lego/lego.api.ts';

export const useForm = (parts: IPart[]) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    surname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    tel: Yup.string()
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        'Invalid phone number',
      )
      .required('Required'),
    date: Yup.date().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required'),
  });

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    tel: '',
    date: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  };

  const navigate = useNavigate();
  const [postOrder] = useSubmitOrderMutation();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, dirty } = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      alert(JSON.stringify({shipping: values}, null, 2));
      alert(JSON.stringify({order: parts}, null, 2));
      await postOrder({shipping: values, order: parts});
      actions.resetForm();
      navigate('/');
    },
  });

  const generateFormikProps = (propertyName: keyof FormValues) => ({
    id: propertyName,
    value: values[propertyName],
    onChange: handleChange,
    onBlur: handleBlur,
    className:
      errors[propertyName] && touched[propertyName]
        ? 'w-full rounded-md border border-red-500 bg-red-50 px-6 py-3 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100'
        : 'w-full rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md',
  });

  const ErrorMessageTip: FC<{ propertyName: keyof FormValues }> = ({ propertyName }) =>
    errors[propertyName] && touched[propertyName] ? (
      <p className="text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">{errors[propertyName]}</span>
      </p>
    ) : null;

  return { generateFormikProps, ErrorMessageTip, handleSubmit, isValid, dirty };
};
