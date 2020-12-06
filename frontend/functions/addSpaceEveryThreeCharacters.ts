export const addSpaceEveryThreeCharacters = (str: string) =>
  [...((str as any).replaceAll(" ", "") as string)]
    .reverse()
    .map((d, i) => (i % 3 == 0 ? d + " " : d))
    .reverse()
    .join("")
    .trim();
