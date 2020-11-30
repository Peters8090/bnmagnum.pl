export const addSpaceEveryThreeCharacters = (str: string) =>
  [...str]
    .reverse()
    .map((d, i) => (i % 3 == 0 ? d + " " : d))
    .reverse()
    .join("")
    .trim();
