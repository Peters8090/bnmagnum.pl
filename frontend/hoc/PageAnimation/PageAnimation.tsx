import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";

interface PageAnimationProps {
  overrideKey?: string | number;
}

export const PageAnimation: FC<PageAnimationProps> = (props) => {
  const router = useRouter();

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };

  return (
    <motion.div
      key={props.overrideKey ?? router.route}
      transition={spring}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};
