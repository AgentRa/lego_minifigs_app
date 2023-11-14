import React from 'react';
import { FormValues } from '@/shared/models.ts';

type FormTemplateProps = {
  generateFormikProps: (value: keyof FormValues) => object;
  ErrorMessageTip: React.FC<{ propertyName: keyof FormValues }>;
};

export const FormTemplate = ({ generateFormikProps, ErrorMessageTip }: FormTemplateProps) => {
  return (
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
  );
};
