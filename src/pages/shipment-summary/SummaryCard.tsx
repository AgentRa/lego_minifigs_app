import { IPart } from '@/shared/models.ts';

const DetailsShimmer = () => {
  return (
    <div className="my-10 flex w-full animate-pulse flex-col justify-between gap-10">
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="block h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 flex w-full flex-col gap-2">
          <p className="h-4 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700"></p>
          <p className="h-4 w-2/5  rounded-full bg-gray-200 dark:bg-gray-700"></p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <span className="block h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 flex w-full flex-col gap-2">
          <p className="h-4 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700"></p>
          <p className="h-4 w-2/5  rounded-full bg-gray-200 dark:bg-gray-700"></p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <span className="block h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 flex w-full flex-col gap-2">
          <p className="h-4 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700"></p>
          <p className="h-4 w-2/5  rounded-full bg-gray-200 dark:bg-gray-700"></p>
        </div>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <span className="block h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></span>
        </div>

        <div className="ms-4 mt-2 flex w-full flex-col gap-2">
          <p className="h-4 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700"></p>
          <p className="h-4 w-2/5  rounded-full bg-gray-200 dark:bg-gray-700"></p>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ image, name, parts = [] }: { image: string; name: string; parts?: IPart[] }) => {
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
      {parts.length && <p className="self-start text-sm font-bold">There are {parts.length} parts in this minifig:</p>}
      {parts.length ? (
        <div className="my-3 flex w-full flex-col gap-3">
          {parts.map((part) => {
            return (
              <div className="mb-2 flex gap-5 self-start" key={part.part_cat_id}>
                <img className="h-20 w-20" src={part.part_img_url} alt={part.name} />
                <div className="flex flex-col">
                  <p className="max-w-xs truncate">{part.name}</p>
                  <p className="text-amber-500">{part.part_num}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <DetailsShimmer />
      )}
    </div>
  );
};

export default SummaryCard;
