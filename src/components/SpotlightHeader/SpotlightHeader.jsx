"use client";
import Image from "next/image";
import styles from "./spotlightHeader.module.css";
import Link from "next/link";

const SpotlightHeader = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.box}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src="/images/gavaria-logo-white.png"
            width={100}
            height={100}
            className="image"
            alt="Gavaria"
          />
        </Link>
        <div className={styles.right}>
          <Link href={"/marketplace"} className={styles.marketplace}>
            Marketplace
          </Link>
          <Link href={"/marketplace"} className={styles.signin}>
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SpotlightHeader;
