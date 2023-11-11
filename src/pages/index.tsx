import { Routes, Route } from "react-router";
import { lazy } from "react";

const DrawFiguresPage = lazy(() => import("./draw-figures/index.tsx"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DrawFiguresPage />} />
      <Route path="/results" element={<div> Choose you minifig </div>} />
      <Route path="/summary" element={<div> id fig page</div>} />
    </Routes>
  );
};

//TODO: naming convention