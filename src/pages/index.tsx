import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { NoMatch } from '@/pages/no-match/404.tsx';

const DrawFiguresPage = lazy(() => import('./draw-figures/index.tsx'));
const ChooseFigurePage = lazy(() => import('./choose-figure/index.tsx'));
const ShipmentSummaryPage = lazy(() => import('./shipment-summary/index.tsx'));
const ErrorPage = lazy(() => import('./error/index.tsx'));

const routes = [
  {
    path: '/',
    element: <DrawFiguresPage />,
  },
  {
    path: '/results',
    element: <ChooseFigurePage />,
  },
  {
    path: '/summary',
    element: <ShipmentSummaryPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);
