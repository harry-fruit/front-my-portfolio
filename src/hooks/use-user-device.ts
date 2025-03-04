import { useEffect, useState } from "react";

export const useUserDevice = (): "mobile" | "desktop" => {
  const [userDevice, setUserDevice] = useState<"mobile" | "desktop">("mobile");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile =
      userAgent.includes("Android") ||
      userAgent.includes("iPhone") ||
      /Mobi/.test(userAgent);

    setUserDevice(isMobile ? "mobile" : "desktop");
  }, [userDevice]);

  return userDevice;
};
