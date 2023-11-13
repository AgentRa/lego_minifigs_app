import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetMinifigSetQuery } from '@/app/store/lego/lego.api.ts';
import { IMinifig } from '@/shared/models.ts';
import { useLocation } from 'react-router-dom';

const ShipmentSummaryPage = () => {
  const { state: figure } = useLocation() as { state: IMinifig };
  const {data} = useGetMinifigSetQuery(figure.set_num)
  console.log('data', data)
  console.log('figure', figure)

  const ShippingSchema = Yup.object().shape({
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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      tel: '',
      date: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: ShippingSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const generateFormikProps = (propertyName: keyof typeof values) => ({
    id: propertyName,
    value: values[propertyName],
    onChange: handleChange,
    onBlur: handleBlur,
    className:
      errors[propertyName] && touched[propertyName]
        ? 'w-full rounded-md border border-red-500 bg-red-50 px-6 py-3 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100'
        : 'w-full rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md',
  });

  const ErrorMessageTip: React.FC<{ propertyName: keyof typeof values }> = ({ propertyName }) =>
    errors[propertyName] && touched[propertyName] ? (
      <p className="text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">{errors[propertyName]}</span>
      </p>
    ) : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <div className="flex min-h-screen  items-center justify-center">
        <form className="flex w-1/2 flex-col gap-2.5" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <div className="w-full">
              <div className="flex justify-between">
                <label htmlFor="name" className="block text-base font-medium text-[#07074D]">
                  Name
                </label>
                <ErrorMessageTip propertyName={'name'} />
              </div>
              <input type="text" placeholder="Jane" {...generateFormikProps('name')} />
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <label htmlFor="surname" className="block text-base font-medium text-[#07074D]">
                  Surname
                </label>
                <ErrorMessageTip propertyName={'surname'} />
              </div>
              <input type="text" placeholder="Doe" {...generateFormikProps('surname')} />
            </div>
          </div>

          <>
            <div className="flex justify-between">
              <label htmlFor="tel" className="block text-base font-medium text-[#07074D]">
                Phone number
              </label>
              <ErrorMessageTip propertyName={'tel'} />
            </div>
            <input type="tel" placeholder="+48* (111) 111-111" {...generateFormikProps('tel')} />
          </>

          <>
            <div className="flex justify-between">
              <label htmlFor="email" className="block text-base font-medium text-[#07074D]">
                Email address
              </label>
              <ErrorMessageTip propertyName="email" />
            </div>
            <input type="email" placeholder="jane.doe@example.com" {...generateFormikProps('email')} />
          </>

          <>
            <div className="flex justify-between">
              <label htmlFor="date" className="block text-base font-medium text-[#07074D]">
                Date
              </label>
              <ErrorMessageTip propertyName="date" />
            </div>
            <input type="date" {...generateFormikProps('date')} />
          </>

          <>
            <div className="flex justify-between">
              <label htmlFor="address" className="block text-base font-medium text-[#07074D]">
                Address
              </label>
              <ErrorMessageTip propertyName="address" />
            </div>
            <input type="text" placeholder="200 E Main St." {...generateFormikProps('address')} />
          </>

          <>
            <div className="flex justify-between">
              <label htmlFor="city" className="block text-base font-medium text-[#07074D]">
                City
              </label>
              <ErrorMessageTip propertyName="city" />
            </div>
            <input type="text" placeholder="Phoenix" {...generateFormikProps('city')} />
          </>

          <div className="flex gap-5">
            <div className="w-full ">
              <div className="flex justify-between">
                <label htmlFor="state" className="block text-base font-medium text-[#07074D]">
                  State
                </label>
                <ErrorMessageTip propertyName="state" />
              </div>
              <input type="text" placeholder="Arizona" {...generateFormikProps('state')} />
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <label htmlFor="zip" className="block text-base font-medium text-[#07074D]">
                  Zip Code
                </label>
                <ErrorMessageTip propertyName="zip" />
              </div>
              <input type="text" placeholder="Zip Code" {...generateFormikProps('zip')} />
            </div>
          </div>
          <>
            <button className="hover:shadow-form w-1/4 self-end rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </>
        </form>
      </div>
    </main>
  );
};

export default ShipmentSummaryPage;
