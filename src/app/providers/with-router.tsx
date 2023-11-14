import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from '@/shared/components';


// eslint-disable-next-line react/display-name
export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={<Spinner />}
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  );