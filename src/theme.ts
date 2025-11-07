import { createTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

// Primary Palette 
const blueOcean: MantineColorsTuple = [
  "#e0f7ff",
  "#b3ecff",
  "#80dfff",
  "#4dd2ff",
  "#1ac6ff",
  "#00aadd",
  "#0088aa",
  "#006688",
  "#004466",
  "#002244",
];

// Secondary Palette
const warmOrange: MantineColorsTuple = [
  "#fff3e0",
  "#ffe0b2",
  "#ffcc80",
  "#ffb74d",
  "#ffa726",
  "#fb8c00",
  "#ef6c00",
  "#e65100",
  "#bf360c",
  "#8f2a06",
];

// Global Theme Definition
export const theme = createTheme({
  primaryColor: "blueOcean",
  colors: {
    blueOcean,
    warmOrange,
  },
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  defaultRadius: "md",
});