"use client";
import { Footer } from "@/components/Footer/Footer";
import { Navabar } from "@/components/Navbar/Navabar";
import Spotlight from "@/components/Spotlight/Spotlight";
import SpotlightHeader from "@/components/SpotlightHeader/SpotlightHeader";
import Spotlightsection from "@/components/SpotlightSection/Spotlightsection";
import HomeComponents from "@/components/maincomponents/homecomponents/HomeComponents";
import PlayerComponents from "@/components/maincomponents/playercomponents/PlayerComponents";

export default function Home({ Component, pageProps }) {
  return (
    <>
    <Spotlight />
    <Footer />
    </>
  );
}
