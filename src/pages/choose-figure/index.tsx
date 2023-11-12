import { useLocation } from 'react-router-dom';

const ChooseFigurePage = () => {
  const { state } = useLocation();
  console.log('state 1', state)

  const Card = () => (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img className="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
          <p className="my-4 pl-4 font-bold text-gray-500">Product Name</p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">$399</p>
        </div>
      </div>
    </div>
  )



  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <div className="flex min-h-screen flex-col justify-center items-center  gap-y-6">
      <Card />
      </div>
    </main>
  );
};

export default ChooseFigurePage;
