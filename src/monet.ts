import { hcl_to_sRGB, sRGB_to_JCh } from 'color-calculus';

export interface MonetPalette {
  accent1: MonetAccent;
  accent2: MonetAccent;
  accent3: MonetAccent;
  neutral1: MonetAccent;
  neutral2: MonetAccent;
}

export interface MonetAccent {
  10: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

const rgbToHex = (r: number, g: number, b: number) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const xx = Math.max(Math.min(Math.round(x), 255), 0);
      const hex = xx.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return [r, g, b];
  }
  return null;
};

const shadesOf = (hue: number, chroma: number) => {
  let cArr = Array(11);

  cArr[0] = [hue, chroma, 99.0];
  cArr[1] = [hue, chroma, 95.0];

  let i = 2;
  while (i < 11) {
    cArr[i] = [hue, chroma, i === 6 ? 49.6 : 100.0 - (i - 1.0) * 10.0];
    i++;
  }

  cArr = cArr
    .map((c) => hcl_to_sRGB(c))
    .map((c) => rgbToHex(...(c as [number, number, number])))
    .map((c) => (c.includes('NAN') ? '#000000' : c));

  const names = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return names.reduce((o, k, i) => ({ ...o, [k]: cArr[i] }), {});
};

export const getMonetPalette = (color: string) => {
  const hue = sRGB_to_JCh(hexToRgb(color) || [0, 0, 0])[2];

  const palette = {
    accent1: shadesOf(hue, 48.0),
    accent2: shadesOf(hue, 16.0),
    accent3: shadesOf(hue + 60.0, 32.0),
    neutral1: shadesOf(hue, 4.0),
    neutral2: shadesOf(hue, 8.0),
  };

  return palette as MonetPalette;
};

export const applyMonetPalette = (
  palette: MonetPalette,
  element: HTMLElement,
  prefix?: string
) => {
  for (const [accent, shades] of Object.entries(palette)) {
    for (const [shade, clr] of Object.entries(shades as MonetAccent)) {
      if (element.style) {
        element.style.setProperty(
          `--${prefix || 'you'}-${accent.at(0)}${accent.at(-1)}-${shade}`,
          clr
        );
      } else {
        console.warn('monet.js: style property not found on element');
        return;
      }
    }
  }
};
