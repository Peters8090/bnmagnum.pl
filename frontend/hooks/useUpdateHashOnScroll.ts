import { useEffect } from "react";

/**
 * @param sections - Section IDs you want to update on scroll
 */
export const useUpdateHashOnScroll = (sections: string[]) => {
  const _sections = ["", ...sections];

  const findClosestValue = (counts: number[], goal: number) =>
    counts.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );

  useEffect(() => {
    setInterval(() => {
      const scrollY = document?.scrollingElement?.scrollTop;

      if (scrollY !== undefined) {
        const scrollTops = _sections.map((section) =>
          section === "" ? 0 : document.getElementById(section)!.offsetTop
        );

        const closestSection =
          _sections[scrollTops.indexOf(findClosestValue(scrollTops, scrollY))];

        if (window.location.hash.slice(1) !== closestSection) {
          history.replaceState(
            null,
            "",
            document.location.pathname +
              (closestSection ? `#${closestSection}` : "")
          );
        }
      }
    }, 400);
  }, []);
};
