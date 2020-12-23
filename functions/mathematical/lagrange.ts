export const lagrange = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
  x5: number,
  y5: number
) => (x: number) =>
  (y1 * ((x - x2) * (x - x3) * (x - x4) * (x - x5))) /
    ((x1 - x2) * (x1 - x3) * (x1 - x4) * (x1 - x5)) +
  (y2 * ((x - x1) * (x - x3) * (x - x4) * (x - x5))) /
    ((x2 - x1) * (x2 - x3) * (x2 - x4) * (x2 - x5)) +
  (y3 * ((x - x1) * (x - x2) * (x - x4) * (x - x5))) /
    ((x3 - x1) * (x3 - x2) * (x3 - x4) * (x3 - x5)) +
  (y4 * ((x - x1) * (x - x2) * (x - x3) * (x - x5))) /
    ((x4 - x1) * (x4 - x2) * (x4 - x3) * (x4 - x5)) +
  (y5 * ((x - x1) * (x - x2) * (x - x3) * (x - x4))) /
    ((x5 - x1) * (x5 - x2) * (x5 - x3) * (x5 - x4));
