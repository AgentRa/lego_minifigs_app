import { useLocation, useNavigate } from 'react-router-dom';
import { IMinifig } from '@/shared/models.ts';
import { useState } from 'react';
import { Button, Card } from '@/shared/components';

const ChooseFigurePage = () => {
  const { state: randomFiguresArr } = useLocation() as { state: Array<IMinifig> };
  const navigate = useNavigate();

  const [selectedFigure, setSelectedFigure] = useState(randomFiguresArr.map(() => false));
  const index = selectedFigure.findIndex((selected) => selected);

  const toggleCard = (index: number) => {
    setSelectedFigure((prev) => prev.map((value, i) => (i === index ? !value : false)));
  };

  const handleNavigate = () => {
    toggleCard(-1);

    setTimeout(() => {
      navigate('/summary', { state: randomFiguresArr[index] });
    }, 1000);
  };

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center  gap-y-6">
        <h1 className="mb-10 mt-4 font-bold  uppercase tracking-tight text-white sm:text-3xl">Choose your minifig</h1>
        <div className="flex gap-10">
          {randomFiguresArr.map(({ set_num, set_img_url, name, set_url }, index) => (
            <Card
              image={set_img_url}
              name={name}
              details={set_url}
              onSelect={() => toggleCard(index)}
              active={selectedFigure[index]}
              key={set_num}
            />
          ))}
        </div>
        <Button onClick={handleNavigate} disabled={index === -1}>
          Proceed to shipment
        </Button>
      </div>
    </main>
  );
};

export default ChooseFigurePage;
