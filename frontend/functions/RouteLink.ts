import { RouteType } from "../interfaces and types/RouteType";

export function RouteLink<T>(
  { routeName }: RouteType<T>,
  arg?: number | string,
  queryString: string = ""
) {
  const href = routeName;

  let as = routeName;
  const regex = /^(\/[a-zA-Z-]*)((\/)(\[{1,2}([a-zA-Z0-9.]*)]{1,2}))*$/;
  const executedRegex = regex.exec(routeName);
  if (executedRegex) {
    const asParts = [];
    asParts.push(executedRegex[1]);
    if (arg) {
      asParts.push(arg);
    }
    if (queryString) {
      asParts.push("?" + queryString);
    }

    as = asParts.join("/");
  }

  return { href, as };
}
