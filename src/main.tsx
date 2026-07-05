import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import App from './App.tsx';
import { portfolioTheme } from './theme.ts';

// Import Mantine base styles
import '@mantine/core/styles.css';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'portfolio-color-scheme' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={portfolioTheme} colorSchemeManager={colorSchemeManager} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);