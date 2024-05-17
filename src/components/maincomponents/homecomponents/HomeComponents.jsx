import React from "react";
import styles from "./HomeComponents.module.css";
import Image from "next/image";

function HomeComponents() {
  return (
    <>
      <div className={styles.main}>
        <Image
          src="/background-images/background.png"
          alt="Description of image"
          width={1990}
          height={300}
        />
      </div>
    </>
  );
}

export default HomeComponents;
