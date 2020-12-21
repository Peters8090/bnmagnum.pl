import { useRouter } from "next/router";
import { FC, useEffect } from "react";
const findClosestValue = (counts: number[], goal: number) =>
  counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  );

interface UpdateHashOnScrollProps {
  sections: string[];
}

export const UpdateHashOnScroll: FC<UpdateHashOnScrollProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    const sections = props.sections.filter((s) => !!document.getElementById(s));

    const interval = setInterval(() => {
      const scrollY = document?.scrollingElement?.scrollTop;

      if (scrollY !== undefined) {
        const updateHash = (hash: string) => {
          router.push(router.pathname + (hash ? `#${hash}` : hash));
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

    const hashChangeCallback = (e: HashChangeEvent) => {
      e.preventDefault();
    };
    window.addEventListener("hashchange", hashChangeCallback);

    return () => {
      window.removeEventListener("hashchange", hashChangeCallback);
      clearInterval(interval);
    };
  }, []);

  return <>{props.children}</>;
};
