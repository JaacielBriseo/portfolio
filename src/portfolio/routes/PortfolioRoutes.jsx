import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioPage, ContactPage, AboutPage, ProjectsPage } from '../pages';

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<PortfolioPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="contact" element={<ContactPage />} />

      <Route path="/*" element={<Navigate to="home" />} />
    </Routes>
  );
};
