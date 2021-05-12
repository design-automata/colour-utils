export const RGBAtoHEX = ({ r, g, b, a }: ColourObject) => {
  // convert each float to integer range [0,255] and convert to hexadecimal value
  let hexArr = [r, g, b, a].map(arg => Math.round(arg * 255).toString(16));
  let rgba = hexArr.map(val => val.length === 1 ? `0${val}` : val);

  return `#${rgba.join("")}`
}

export const RGBAto255 = ({ r, g, b, a }: ColourObject) => {
  let intArr = [r, g, b].map(arg => Math.round(arg * 255));
  let aFinal = a === 1 || 0 ? a : a.toFixed(3);

  return `rgba(${intArr.join(", ")}, ${aFinal})`
}

export const RGBAtoHSLA = ({ r, g, b, a }: ColourObject) => {
  let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0, s = 0, l = 0,
      aFinal = a === 1 || 0 ? a : a.toFixed(3);

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  h < 0 ? h += 360 : '';

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsla(${h}, ${s}%, ${l}%, ${aFinal})`
}

interface ColourObject {
  r: number,
  g: number,
  b: number,
  a: number
}