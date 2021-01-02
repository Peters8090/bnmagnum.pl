import { Content } from "../../../../../content";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { Guide } from "../../shared/Guide/Guide";

export const GuideForBuyers: RouteType = Object.assign(() => {
  return (
    <Guide
      route={Content.guideForBuyers.route}
      steps={Content.guideForBuyers.steps}
    />
  );
}, Content.guideForBuyers.route);
