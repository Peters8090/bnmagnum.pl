import { replaceAll } from "./replaceAll";
export const formatText = (text: string) => {
  // remove multiple spaces
  text = text.replace(/\n\s*\n\s*\n/g, "\n\n");

  // add space after - or * or 1. and before text in lists
  text = replaceAll(text, /\n([*-]|[0-9]+\.)(.)/, `\n$1 $2`);

  return text;
};
