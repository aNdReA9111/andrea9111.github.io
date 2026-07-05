// src/App.tsx
import { MantineProvider, Box } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { portfolioTheme } from './theme';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Formation } from './pages/Formation';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';

export default function App() {
  return (
    <MantineProvider theme={portfolioTheme} defaultColorScheme="dark">
      <BrowserRouter>
        <SiteHeader />
        <Box style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <SiteFooter />
        </Box>
      </BrowserRouter>
    </MantineProvider>
  );
}