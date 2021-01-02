import { css } from "@emotion/core";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import NextNProgress from "nextjs-progressbar";
import {
  createContext,
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { Navigation } from "./Navigation/Navigation";

interface LayoutContextProps {
  navigationRef: MutableRefObject<HTMLElement | undefined>;
  isNavigatingToHash: boolean;
  setIsNavigatingToHash: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContextProps>(
  (null as unknown) as LayoutContextProps
);

export const Layout: FC = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `,
  };

  const navigationRef = useRef<HTMLElement>();

  const [isNavigatingToHash, setIsNavigatingToHash] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ navigationRef, isNavigatingToHash, setIsNavigatingToHash }}
    >
      <Paper square elevation={0} css={styles.root}>
        <Navigation ref={navigationRef} />
        {props.children}
        <NextNProgress color={theme.palette.primary.main} />
      </Paper>
    </LayoutContext.Provider>
  );
};
