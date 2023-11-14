import { Link } from 'react-router-dom';

type CardProps = {
  image: string;
  name: string;
  details: string;
  onSelect?: () => void;
  active?: boolean;
};

export const Card = ({ image, name, details, onSelect, active }: CardProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={onSelect}
      className={`flex h-80 w-80 flex-col items-center justify-between rounded-lg bg-white p-4 shadow duration-150 ${
        active
          ? 'border-golden-glow scale-110 shadow-md'
          : 'border-2 border-transparent duration-500 hover:scale-110 hover:shadow-md'
      }`}
    >
      <img
        className="h-1/2 rounded-lg object-cover object-center"
        src={
          image ||
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
        }
        alt="product"
      />
      <p className="my-4 max-w-xs  truncate px-5 font-bold text-gray-900">{name}</p>

      <Link
        className="hover:scale110 ml-4 text-xl font-semibold text-amber-500 hover:text-amber-900"
        to={details}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        Show deltails
      </Link>
    </div>
  );
};
