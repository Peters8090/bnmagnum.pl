import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";

interface PageAnimationProps {
  overrideKey?: string | number;
}

export const PageAnimation: FC<PageAnimationProps> = (props) => {
  const router = useRouter();

  return (
    <motion.div
      key={props.overrideKey ?? router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0.5,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      {props.children}
    </motion.div>
  );
};
