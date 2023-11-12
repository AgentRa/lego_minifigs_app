import { Routes, Route } from "react-router";
import { lazy } from "react";
import { NoMatch } from '@/pages/no-match/404.tsx';

const DrawFiguresPage = lazy(() => import("./draw-figures/index.tsx"));
const ChooseFigurePage = lazy(() => import("./choose-figure/index.tsx"));
const ShipmentSummaryPage = lazy(() => import("./shipment-summary/index.tsx"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DrawFiguresPage />} />
      <Route path="/results" element={<ChooseFigurePage />} />
      <Route path="/summary" element={<ShipmentSummaryPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

//TODO: naming convention