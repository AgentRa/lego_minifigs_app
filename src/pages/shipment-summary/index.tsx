import React, { useState } from 'react';

const ShipmentSummaryPage = () => {
  // const { state: figure } = useLocation() as { state: IMinifig };
  // const {data} = useGetMinifigSetQuery(figure.set_num)
  // console.log('data', data)

  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    let inputValue = event.currentTarget.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (inputValue.length > 11) {
      inputValue = inputValue.substring(0, 11);
    }
    const formattedValue = formatPhoneNumber(inputValue);
    setTextInputValue(formattedValue);
  };

  const formatPhoneNumber = (input: string) => {
    const phoneNumberRegex = /^(\d{1,2})(\d{0,3})(\d{0,3})(\d{0,3})$/;
    const matches = input.match(phoneNumberRegex);

    if (matches) {
      return `+${matches[1]}${matches[2] ? ' (' + matches[2] : ''}${matches[3] ? ') ' + matches[3] : ''}${
        matches[4] ? '-' + matches[4] : ''
      }`;
    }

    return input;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <div className="flex min-h-screen  items-center justify-center">
        <form className="w-1/2">
          <div className="mb-5 flex w-full gap-5">
            <div className="w-full">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Jane"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="w-full">
              <label htmlFor="surname" className="mb-3 block text-base font-medium text-[#07074D]">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Doe"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="tel" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone number
            </label>

            <input
              type="tel"
              id="tel"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              placeholder="+48* (111) 111-111"
              value={textInputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              <p className="pb-2 font-medium text-slate-700">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="jane.doe@example.com"
              />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
              <p className="pb-2 font-medium text-slate-700">Address</p>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="200 E Main St."
              />
            </label>
          </div>
          <div className="mb-5">
            <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
              <p className="pb-2 font-medium text-slate-700">City</p>
              <input
                id="city"
                name="city"
                type="text"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                placeholder="Phoenix"
              />
            </label>
          </div>
          <div className="mb-5 flex w-full gap-5">
            <div className="w-full">
              <label htmlFor="state" className="mb-3 block text-base font-medium text-[#07074D]">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Arizona"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="w-full">
              <label htmlFor="zip" className="mb-3 block text-base font-medium text-[#07074D]">
                Zip Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                placeholder="Zip Code"
                className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] px-8 py-3 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ShipmentSummaryPage;
