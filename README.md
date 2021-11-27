# Monet.js

This project tries to replicate the Android 12 (Material You or Material Design 3) color system.
Suitable for use in apps designed for mobile devices to give out the native look and feel :)

## Demo

View [monetjs-demo.vercel.app](https://view-like-mobile.vercel.app/?url=https://monetjs-demo.vercel.app&title=MonetJS-Demo&bg=black) in a iframe based mobile screen size emulator called view-like-mobile.

## Installation

Install with npm

```bash
  npm install monet.js

```

## Usage/Examples

Apply from JS

```javascript
import { getMonetPalette, applyMonetPalette } from 'monet.js';

const bodyEl = document.body;
const palette = getMonetPalette('#ff00ff');
applyMonetPalette(palette, bodyEl, 'you');
```

Use in CSS

```css
body {
  color: var(--you-a1-700);
  background-color: var(--you-n1-50);
}
```

## Palette Object

```javascript
// for getMonetPalette('#ff00ff')

{
  accent1: {
    '10': '#ffdeff',
    '50': '#ffd3ff',
    '100': '#ffc5ff',
    '200': '#ffa9f4',
    '300': '#e58ed7',
    '400': '#c873bc',
    '500': '#aa589f',
    '600': '#903f86',
    '700': '#75256d',
    '800': '#5b0654',
    '900': '#41003d'
  },
  accent2: {
    '10': '#fff3ff',
    '50': '#ffe8ff',
    '100': '#f8daf2',
    '200': '#dbbed6',
    '300': '#bfa3ba',
    '400': '#a4889f',
    '500': '#896e84',
    '600': '#70566c',
    '700': '#583f53',
    '800': '#40293c',
    '900': '#2a1426'
  },
  accent3: {
    '10': '#ffe8de',
    '50': '#ffdcd3',
    '100': '#ffcec5',
    '200': '#feb3aa',
    '300': '#e1988f',
    '400': '#c47d76',
    '500': '#a7635c',
    '600': '#8c4b45',
    '700': '#71332f',
    '800': '#571c1a',
    '900': '#3d0300'
  },
  neutral1: {
    '10': '#fffaff',
    '50': '#f6eef5',
    '100': '#e8e0e6',
    '200': '#ccc4ca',
    '300': '#b0a9af',
    '400': '#968f94',
    '500': '#7b7479',
    '600': '#635c62',
    '700': '#4b454a',
    '800': '#342f33',
    '900': '#1f1a1e'
  },
  neutral2: {
    '10': '#fff8ff',
    '50': '#fcecf8',
    '100': '#eddeea',
    '200': '#d1c2ce',
    '300': '#b5a7b2',
    '400': '#9b8d98',
    '500': '#80727d',
    '600': '#675b65',
    '700': '#4f434d',
    '800': '#382d36',
    '900': '#231821'
  }
}
```
