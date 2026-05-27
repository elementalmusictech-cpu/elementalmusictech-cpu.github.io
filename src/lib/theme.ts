/* Spectrum palette used by the PrismHero SVG animation.
   These live here because SVG setAttribute calls need raw hex strings — CSS vars
   don't work inside JS-driven setAttribute. All other colors belong in globals.css. */
export const SPECTRUM = [
  "#FF1744", // red
  "#FF6D00", // orange
  "#FFD600", // yellow
  "#76FF03", // green
  "#00E5FF", // cyan
  "#2979FF", // blue
  "#D500F9", // violet
] as const;
