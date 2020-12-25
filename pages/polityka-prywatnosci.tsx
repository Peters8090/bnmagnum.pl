import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { RouteType } from "../interfaces and types/RouteType";
import { HeadContext } from "./_app";

const PrivacyPolicyPage: RouteType = () => {
  const router = useRouter();
  const { setTitleParts } = useContext(HeadContext);

  useEffect(() => {
    setTitleParts(["Polityka Prywatności"]);
  }, [router.asPath]);

  const styles = {};

  return <div>Polityka Prywatności</div>;
};

PrivacyPolicyPage.displayName = "Polityka Prywatności";
PrivacyPolicyPage.routeName = "/polityka-prywatnosci";

export default PrivacyPolicyPage;
