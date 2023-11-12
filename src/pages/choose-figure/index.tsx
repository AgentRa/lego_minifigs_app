import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IMinifig } from '@/app/store/lego/models.ts';
import { useState } from 'react';

const ChooseFigurePage = () => {
  const { state: figArr } = useLocation() as { state: Array<Record<'data', IMinifig>> };
  const navigate = useNavigate();

  const [selectedFigure, setSelectedFigure] = useState(figArr.map(() => false));
  const index = selectedFigure.findIndex((selected) => selected === true);

  const toggleCard = (index: number) => {
    setSelectedFigure((prev) => prev.map((value, i) => (i === index ? !value : false)));
  };

  const Card = ({ image, name, index, details }: { image: string; name: string; index: number; details: string }) => {
    const cardClassName = `flex max-w-xs flex-col items-center justify-between rounded-lg bg-white p-4 shadow duration-150 ${
      selectedFigure[index] ? 'scale-110 shadow-md' : 'hover:scale-110 hover:shadow-md'
    } ${selectedFigure[index] ? 'border-golden-glow' : ''}`;
    return (
      <div className={cardClassName} onClick={() => toggleCard(index)}>
        <img
          className="h-auto w-2/3 rounded-lg object-cover object-center"
          src={
            image ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt="product"
        />
        <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
        <Link
          className="hover:scale110 ml-4 text-xl font-semibold text-gray-800"
          to={details}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          Show deltails
        </Link>
      </div>
    );
  };

  const proceedToSiphment = async () => {
    navigate('/summary', { state: figArr[index].data });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <div className="flex min-h-screen flex-col items-center justify-center  gap-y-6">
        <div className="flex gap-10">
          {figArr.map(({ data: { set_num, set_img_url, name, set_url } }, index) => {
            return <Card image={set_img_url} key={set_num} name={name} index={index} details={set_url} />;
          })}
        </div>
        <button
          onClick={proceedToSiphment}
          disabled={index === -1}
          className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Proceed to shipment
        </button>
      </div>
    </main>
  );
};

export default ChooseFigurePage;
