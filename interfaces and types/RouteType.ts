import { NextPage } from "next";

export type RouteType<T = {}> = NextPage<T> & {
  displayName: string;
  routeName: string;
};
