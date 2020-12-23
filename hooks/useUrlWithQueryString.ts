import { useRouter } from "next/router";
import queryString from "query-string";

export const useUrlWithQueryString = () => {
  const router = useRouter();

  const parsed = queryString.parseUrl(router.asPath);
  const url = parsed.url;
  const queryParsed = parsed.query;
  const query = queryString.stringify(queryParsed);

  return { url, queryParsed, query };
};
