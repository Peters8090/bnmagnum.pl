export const replaceAll = (
  str: string,
  find: string | RegExp,
  replace: string
): string => {
  return str ? str.replace(new RegExp(find, "g"), replace) : "";
};
