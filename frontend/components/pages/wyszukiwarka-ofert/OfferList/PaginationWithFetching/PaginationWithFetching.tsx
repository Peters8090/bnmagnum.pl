import { css } from "@emotion/core";
import { useTheme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { useRouter } from "next/router";
import { FC } from "react";
import { useUrlWithQueryString } from "../../../../../hooks/useUrlWithQueryString";

interface PaginationWithFetchingProps {
  page: number;
  totalPages: number;
}

export const PaginationWithFetching: FC<PaginationWithFetchingProps> = (
  props
) => {
  const theme = useTheme();

  const styles = {
    pagination: css`
      display: inline-block;
      margin: ${theme.spacing(2)}px auto;
    `,
  };

  const { url, query } = useUrlWithQueryString();

  const router = useRouter();

  const handlePaginationChange = (_: any, page: number) => {
    const q = new URLSearchParams(query);
    q.delete("page");
    q.append("page", page.toString());
    router.push(url + (q.toString() ? "?" + q.toString() : ""));
  };

  return (
    <Pagination
      css={styles.pagination}
      page={props.page}
      count={props.totalPages}
      color="secondary"
      onChange={handlePaginationChange}
    />
  );
};
