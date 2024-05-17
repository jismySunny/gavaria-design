import React, { useEffect, useState, useRef } from "react";
import SpotlightNavbar from "../SpotlightHeader/SpotlightHeader";
import styles from "./spotlight.module.css";
import Image from "next/image";
import { Navabar } from "@/components/Navbar/Navabar";
import Link from "next/link";

const Spotlight = ({ sectionsDetails, isMeta }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [bgImage, setBgImage] = useState(null);
  const [spotlightData, setSpotlightData] = useState([]);
  const [slidePosition, setSlidePosition] = useState(1450);
  const [sticky, setSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const spotlightRef = useRef();
  const navRef = useRef();
  const wrapperContainerRef = useRef();

  

  const handleResize = () => {
    if (window.innerWidth > 2600) {
      setSlidePosition(2600);
    } else if (window.innerWidth > 1900) {
      setSlidePosition(1900);
    } else if (window.innerWidth > 1800) {
      setSlidePosition(1800);
    } else if (window.innerWidth > 1600) {
      setSlidePosition(1600);
    }
  };

  const handleScroll = () => {
    const spotlight = spotlightRef.current;
    const nav = navRef.current;

    const spotlightTop = spotlight.clientHeight;
    const scrollY = window.scrollY;

    if (nav) {
      if (scrollY + 80 > spotlightTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={styles.main}
      ref={spotlightRef}
      
    >
      <div className={styles.main_overlay}>
        <div className={styles.wrapper_bg}>
          <img
            className="image"
            width={20}
            height={20}
            src="/background-images/spotlight.png"
            alt="Image"
          />
        </div>
      </div>
      <SpotlightNavbar />
      <div className={styles.slide_container} ref={wrapperContainerRef}>
        <div className={styles.top}>
          {spotlightData?.map(
            (item, index) =>
              index < 8 && (
                <section
                  key={index}
                  className={`${styles.wrapper}`}
                  style={{
                    left: `${index * slidePosition}px`,
                  }}
                >
                  <div className={styles.left}>
                    <Link href={"/marketplace"}>
                      <h1 className={styles.title}>{item?.title}</h1>
                    </Link>
                    <h2 className={styles.author}>{item?.itunesOwnerName}</h2>
                    
                    <p className={styles.descrption}>{item?.description}</p>
                    <div className={styles.button_box}>
                      <div className={styles.play}>
                        <span>Follow Me</span>
                        <Image
                          width={18}
                          height={18}
                          src={"/icons/plus_color.svg"}
                          alt="Play Icon"
                          style={{ borderRadius: "50%" }}
                        />
                      </div>
                      <div className={styles.icon}></div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <Link href={"/marketplace"}>
                      <div className={styles.pod_image}>
                        <Image
                          width={30}
                          height={30}
                          src={isLoading ? "/path/to/preImage.jpg" : item.imageUrl}
                          className="image"
                          alt="Podcast Image"
                          priority
                          unoptimized={true}
                        />
                      </div>
                    </Link>
                  </div>
                </section>
              )
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.slider_dots}>
            {spotlightData?.map(
              (item, index) =>
                index < 8 && (
                  <span
                    onClick={() => setCurrentItem(index)}
                    key={index}
                    className={styles.slider_dot}
                    style={{
                      backgroundColor:
                        currentItem === index ? "#b4b4b4" : "#b4b4b499",
                    }}
                  ></span>
                )
            )}
          </div>
        </div>
        <div className={styles.curvy_bg}>
          <Image
            width={30}
            height={30}
            src={"/background-images/spotlight-curvy-bg.svg"}
            className="image"
            alt="Curvy Background"
          />
        </div>
      </div>
      <Navabar navRef={navRef} sticky={sticky} />
    </section>
  );
};

export default Spotlight;
