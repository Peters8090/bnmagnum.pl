import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import { LayoutContext } from "../Layout/Layout";

interface UpdateHashOnScrollProps {
  sections: string[];
}

export const UpdateHashOnScroll: FC<UpdateHashOnScrollProps> = (props) => {
  const router = useRouter();

  const { isNavigatingToHash } = useContext(LayoutContext);

  useEffect(() => {
    const sections = props.sections.filter((s) => !!document.getElementById(s));

    const triggerHashUpdate = () => {
      if (!isNavigatingToHash) {
        const scrollY = document?.scrollingElement?.scrollTop;

        if (scrollY !== undefined) {
          const updateHash = async (hash: string) => {
            let elem = document.getElementById(hash);
            elem && (elem.id = hash + "-tmp");
            await router.push("/", `/${hash ? "#" + hash : ""}`, undefined);
            elem && (elem.id = hash);
          };
          const curHash = window.location.hash.slice(1);

          const scrollTops = sections.map((section) => ({
            hash: section,
            scrollTop: document.getElementById(section)!.offsetTop,
          }));

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
      console.log(isNavigatingToHash);
    };

    const interval = setInterval(triggerHashUpdate, 400);

    triggerHashUpdate();

    return () => {
      clearInterval(interval);
    };
  }, [isNavigatingToHash]);

  return <>{props.children}</>;
};
