"use client";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import PlayerComponents from "@/components/maincomponents/playercomponents/PlayerComponents";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <HomeComponents />
      <PlayerComponents />
    </>
  );
}
