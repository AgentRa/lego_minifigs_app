import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useGetMinifigSetQuery } from '@/app/store/lego/lego.api.ts';
import { IMinifig, IPart } from '@/shared/models.ts';
import { useLocation } from 'react-router-dom';

const ShipmentSummaryPage = () => {
  const { state: figure } = useLocation() as { state: IMinifig };
  const { data: parts_info } = useGetMinifigSetQuery(figure.set_num) as { data: IPart[] };
  console.log('parts_info', parts_info);

  const SummaryFigureCard = ({ image, name, parts = [] }: { image: string; name: string; parts: IPart[] }) => {
    if (!parts.length) return null;
    return (
      <div className="flex flex-col items-center justify-between ">
        <p className="mb-5 self-start text-2xl">Summary</p>
        <img
          className="h-auto w-3/4 rounded-lg object-cover object-center"
          src={
            image ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt="product"
        />
        <p className="my-4 pl-4 text-center font-bold text-gray-500">{name}</p>
        <p className="self-start text-sm font-bold">There are {parts.length} parts in this minifig:</p>
        {parts.map((part) => {
          return (
            <div className="mb-2 flex gap-5 self-start" key={part.part_cat_id}>
              <img className="h-20 w-20" src={part.part_img_url} alt={part.name} />
              <div className="flex flex-col">
                <p className="max-w-xs truncate">{part.name}</p>
                <p>{part.part_num}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid, dirty } = useFormik({
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
    <main className="max-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500 ">
      <div className="flex min-h-screen items-center justify-center">
        <form className="flex min-h-screen w-4/5 items-center gap-20" onSubmit={handleSubmit}>
          <div className="flex w-2/3 flex-col gap-2.5">
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
          </div>
          <div className="flex min-h-screen w-1/3 flex-col justify-between rounded-lg bg-white p-10">
            <SummaryFigureCard name={figure.name} image={figure.set_img_url} parts={parts_info} />
            <button
              className="hover:shadow-form w-3/4 self-center rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!dirty || !isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ShipmentSummaryPage;
