import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const data = [
  { id: 1, title: "Support" },
  { id: 2, title: "Gavaria Fans" },
  { id: 3, title: "Services" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer_wrapper">
        <section
          className="wrapper"
          style={{
          }}
        >
          <div className={styles.footer_logo}>
              <Image
                width={10}
                height={10}
                src="/images/gavaria-logo-footer.svg"
                className="image"
                alt="Image"
              />
            </div>
          <div className={styles.top}>
            <div className={styles.logo}>
              <Image
                width={10}
                height={10}
                src="/images/gavaria-logo-footer.svg"
                className="image"
                alt="Image"
              />
            </div>
            {data.map((item, index) => (
              <div
                className={styles.link_box}
                key={index}
                style={{
                  marginLeft: index === 0 ? "" : "",
                }}
              >
                <h1>{item?.title}</h1>
                <div className={styles.links}>
                  <Link href="/" className={styles.link}>
                    Health & Fitness
                  </Link>
                  <Link href="/" className={styles.link}>
                    Science
                  </Link>
                  <Link href="/" className={styles.link}>
                    Food
                  </Link>
                  <Link href="/" className={styles.link}>
                    Design
                  </Link>
                  <Link href="/" className={styles.link}>
                    Performing Arts
                  </Link>
                  <Link href="/" className={styles.link}>
                    Visual Arts
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.middle}>
            <div className={styles.icon}>
              <Image
                width={10}
                height={10}
                src="/icons/facebook.svg"
                className="image"
                alt="Facebook"
              />
            </div>
            <div className={styles.icon}>
              <Image
                width={10}
                height={10}
                src="/icons/x.svg"
                className="image"
                alt="X"
              />
            </div>
            <div className={styles.icon}>
              <Image
                width={10}
                height={10}
                src="/icons/youtube.svg"
                className="image"
                alt="Youtube"
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <p>
              All trademarks, service marks, registered trademarks, registered
              service marks, product names, product images, product screenshots,
              company names orlogos are used for product identification/reference
              purposes only and remain the exclusive property of their respective
              owners.
            </p>
            <span>Copy Right © Gavaria 2023 | All Rights Reserved</span>
          </div>
        </section>
      </div>
    </footer>
  );
};
