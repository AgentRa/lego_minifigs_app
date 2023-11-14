import { useForm } from './useForm.tsx';
import { useLocation } from 'react-router-dom';
import { Button } from '@/shared/components';
import { IMinifig } from '@/shared/models.ts';
import SummaryCard from './SummaryCard.tsx';
import { FormTemplate } from '@/pages/shipment-summary/FormTemplate.tsx';
import { useGetMinifigSetQuery } from '@/app/store/lego/lego.api.ts';

const ShipmentSummaryPage = () => {
  const { state } = useLocation() as Record<'state', IMinifig>;
  const { name, set_img_url, set_num } = state;
  const { data: parts_info = [] } = useGetMinifigSetQuery(set_num);

  const { generateFormikProps, ErrorMessageTip, handleSubmit, isValid, dirty } = useForm(parts_info);
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center">
        <form className="flex min-h-screen w-4/5 items-center gap-20" onSubmit={handleSubmit}>
          <FormTemplate generateFormikProps={generateFormikProps} ErrorMessageTip={ErrorMessageTip} />
          <div className="flex min-h-screen w-1/3 flex-col justify-between rounded-lg bg-white p-10">
            <SummaryCard name={name} image={set_img_url} parts={parts_info} />
            <Button type="submit" disabled={!dirty || !isValid} className="self-center">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ShipmentSummaryPage;
