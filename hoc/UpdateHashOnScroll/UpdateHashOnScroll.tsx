import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { LayoutContext } from "../Layout/Layout";

interface UpdateHashOnScrollProps {
  sections: string[];
}

const SECTION_SUFFIX = "-tmp";
export const findSectionEl = (h: string) =>
  document.getElementById(h) || document.getElementById(h + SECTION_SUFFIX);

export const UpdateHashOnScroll: FC<UpdateHashOnScrollProps> = (props) => {
  const router = useRouter();

  const { isNavigatingToHash } = useContext(LayoutContext);

  const [scrollTops, setScrollTops] = useState<
    { hash: string; scrollTop: number }[]
  >();

  const windowSize = useWindowSize();

  useEffect(() => {
    const sections = props.sections.filter((s) => !!findSectionEl(s));

    const _scrollTops = sections.map((section) => ({
      hash: section,
      scrollTop: findSectionEl(section)!.offsetTop,
    }));

    sections.forEach((section) => {
      let elem = findSectionEl(section);
      if (elem) {
        elem.id = section + SECTION_SUFFIX;
      }
    });

    _scrollTops.push({ hash: "", scrollTop: 0 });

    setScrollTops([..._scrollTops]);
  }, [windowSize]);

  useEffect(() => {
    const triggerHashUpdate = () => {
      if (!isNavigatingToHash && scrollTops) {
        const scrollY = document?.scrollingElement?.scrollTop;

        if (scrollY !== undefined) {
          const updateHash = async (hash: string) => {
            let elem = document.getElementById(hash);
            if (elem) {
              elem.id = hash + "-tmp";
            }

            await router.push("/", `/${hash ? "#" + hash : ""}`, undefined);
          };
          const curHash = window.location.hash.slice(1);

          scrollTops.push({ hash: "", scrollTop: 0 });

          const closestSection = scrollTops.reduce((prev, curr) =>
            Math.abs(curr.scrollTop - scrollY) <
            Math.abs(prev.scrollTop - scrollY)
              ? curr
              : prev
          );

          if (curHash !== closestSection.hash) {
            updateHash(closestSection.hash);
          }
        }
      }
    };

    const interval = setInterval(triggerHashUpdate, 400);

    triggerHashUpdate();

    return () => {
      clearInterval(interval);
    };
  }, [isNavigatingToHash, scrollTops]);

  return <>{props.children}</>;
};
