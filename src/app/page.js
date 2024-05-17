"use client";
import { useEffect, useState } from "react";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import PlayerComponents from "@/components/maincomponents/playercomponents/PlayerComponents";

export default function Home({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 280) setIsMobile(true);
      else setIsMobile(false);
    };

    handleResize(); // Call it initially

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Desktop = () => (
    <>
      <HomeComponents />
      <PlayerComponents />
    </>
  );

  return (
    <>
      {isMobile ? <DeviceNotSupport /> : <Desktop />}
    </>
  );
}
