import React from 'react'
import styles from "./Spotlightsection.module.css";
import Image from "next/image";



function Spotlightsection() {
  return (
    <div>
      <section
      className={styles.main}
     
    >
      <div className={styles.main_overlay}>
        <div className={styles.wrapper_bg}>
          <Image
            className="image"
            width={20}
            height={20}
            src="/background-images/spotlight.png"
            alt="Image"
          />
        </div>
      </div>
      </section>
    </div>
    
  )
}

export default Spotlightsection
