import { useLazyGetMinifigRandomQuery } from '@/app/store/lego/lego.api';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const DrawFigures = () => {
  const navigate = useNavigate()
  const [fetchMinifigs, {  data: fetchedMinifig }] = useLazyGetMinifigRandomQuery();

  useEffect(() => {
    if (fetchedMinifig) navigate('/results', {state: fetchedMinifig})
  }, [fetchedMinifig]);

  const drawThreeRandomFigures = () => {
    function generateUniqueRandomNumber(existingNumbers: Set<number>) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 423) + 1;
      } while (existingNumbers.has(randomNumber));

      return randomNumber;
    }

    function generateUniqueRandomArray(length: number) {
      const uniqueNumbers: Set<number> = new Set();
      const resultArray: number[] = [];

      for (let i = 0; i < length; i++) {
        const randomNumber = generateUniqueRandomNumber(uniqueNumbers);
        uniqueNumbers.add(randomNumber);
        resultArray.push(randomNumber);
      }

      return resultArray;
    }

    fetchMinifigs(generateUniqueRandomArray(3));
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <div className="flex min-h-screen flex-col items-center justify-center  gap-y-6">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Lego minifigs mystery box</h1>
        <button
          onClick={drawThreeRandomFigures}
          className="isrounded-lg w-48 flex-initial  border border-sky-600 bg-sky-600 px-3 py-1 text-white hover:bg-sky-700 md:px-4 md:py-2"
        >
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
        </button>
      </div>
    </main>
  );
};

export default DrawFigures;
