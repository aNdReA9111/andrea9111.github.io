import { createTheme, rem } from '@mantine/core';

export const portfolioTheme = createTheme({
  primaryColor: 'emerald',
  colors: {
    emerald: [
      '#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399',
      '#059669', '#047857', '#065f46', '#064e3b', '#022c22'
    ],
  },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    fontWeight: '800',
    sizes: {
      h1: { fontSize: rem(64), lineHeight: '1.05' },
      h2: { fontSize: rem(44), lineHeight: '1.1' },
      h3: { fontSize: rem(24), lineHeight: '1.3' },
    },
  },
});