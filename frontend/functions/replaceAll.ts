export const replaceAll = (
  str: string,
  find: string,
  replace: string
): string => {
  return str ? str.replace(new RegExp(find, "g"), replace) : "";
};
