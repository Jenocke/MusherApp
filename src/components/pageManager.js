import React from "react";
import { MusherList } from "../pages/musherList";
import { ArrivalListPage } from "../pages/arrivalList";
import { DisparenciesDetector } from "../pages/disparencies";
import { Routes, Route } from "react-router-dom";

const PageManager = () => {
  return (
    <Routes>
      <Route path="/mushers" element={<MusherList />} />
      <Route path="/arrivalsLeg1" element={<ArrivalListPage leg={1} />} />
      <Route path="/arrivalsLeg2" element={<ArrivalListPage leg={2} />} />
      <Route path="/disparencies" element={<DisparenciesDetector />} />
    </Routes>
  );
};

export { PageManager };
