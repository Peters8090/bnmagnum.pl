import { replaceAll } from "./replaceAll";
export const addSpaceEveryThreeCharacters = (str: string) => {
  return [...replaceAll(str, " ", "")]
    .reverse()
    .map((d, i) => (i % 3 == 0 ? d + " " : d))
    .reverse()
    .join("")
    .trim();
};
