import { NextPage } from "next";

export interface RouteOnlyProps {
  displayName: string;
  routeName: string;
}

export type RouteType<T = {}> = NextPage<T> & RouteOnlyProps;
