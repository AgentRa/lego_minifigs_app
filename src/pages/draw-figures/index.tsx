import { useLazyGetMinifigRandomQuery } from '@/app/store/lego/lego.api';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components';
import { generateUniqueRandomArray } from '@/shared/utils';

const DrawFigures = () => {
  const navigate = useNavigate();
  const [fetch, { data, isError, error, isSuccess, isFetching }] = useLazyGetMinifigRandomQuery();

  if (isError) navigate('/error', { state: error });
  if (isSuccess) navigate('/results', { state: data });

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center  gap-y-10`}>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Lego minifigs mystery box</h1>
      <Button disabled={isFetching} onClick={() => fetch(generateUniqueRandomArray(3))}>Let&apos;s go</Button>
    </main>
  );
};

export default DrawFigures;
