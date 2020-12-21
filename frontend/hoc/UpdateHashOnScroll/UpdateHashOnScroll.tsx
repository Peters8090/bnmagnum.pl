import { FC, useContext, useEffect } from "react";
import { LayoutContext } from "../Layout/Layout";

interface UpdateHashOnScrollProps {
  sections: string[];
}

export const UpdateHashOnScroll: FC<UpdateHashOnScrollProps> = (props) => {
  const findClosestValue = (counts: number[], goal: number) =>
    counts.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );

  const { forceUpdateNavigation } = useContext(LayoutContext);

  useEffect(() => {
    const sections = props.sections.filter((s) => !!document.getElementById(s));

    const interval = setInterval(() => {
      const scrollY = document?.scrollingElement?.scrollTop;

      if (scrollY !== undefined) {
        const updateHash = (hash: string) => {
          history.replaceState(
            null,
            "",
            document.location.pathname + (hash ? `#${hash}` : "")
          );
          if (forceUpdateNavigation) {
            console.log("b");

            forceUpdateNavigation();
          }
        };
        if (scrollY === 0) {
          updateHash("");
        } else {
          const scrollTops = sections.map(
            (section) => document.getElementById(section)!.offsetTop
          );

          const closestSection =
            sections[scrollTops.indexOf(findClosestValue(scrollTops, scrollY))];

          if (window.location.hash.slice(1) !== closestSection) {
            updateHash(closestSection);
          }
        }
      }
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{props.children}</>;
};
