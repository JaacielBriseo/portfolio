import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../portfolio/components';
import { PortfolioRoutes } from '../portfolio/routes';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<PortfolioRoutes />} />
      </Routes>
    </>
  );
};
