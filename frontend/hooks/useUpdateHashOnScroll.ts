import { useEffect } from "react";

/**
 * @param sections - Section IDs you want to update on scroll
 */
export const useUpdateHashOnScroll = (sections: string[]) => {
  const _sections = sections.filter((s) => !!document.getElementById(s));

  const findClosestValue = (counts: number[], goal: number) =>
    counts.reduce((prev, curr) =>
      Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
    );

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollY = document?.scrollingElement?.scrollTop;

      if (scrollY !== undefined) {
        const updateHash = (hash: string) => {
          history.replaceState(
            null,
            "",
            document.location.pathname + (hash ? `#${hash}` : "")
          );
        };
        if (scrollY === 0) {
          updateHash("");
        } else {
          const scrollTops = _sections.map(
            (section) => document.getElementById(section)!.offsetTop
          );

          const closestSection =
            _sections[
              scrollTops.indexOf(findClosestValue(scrollTops, scrollY))
            ];

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
};
