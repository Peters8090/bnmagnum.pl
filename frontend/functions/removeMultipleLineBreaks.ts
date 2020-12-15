export const removeMultipleLineBreaks = (text: string) =>
  text.replace(/\n\s*\n\s*\n/g, "\n\n");
