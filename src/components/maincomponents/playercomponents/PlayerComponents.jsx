import React from "react";
import styles from "./PlayerComponents.module.css";
import Image from "next/image";

function PlayerComponents() {
  return (
    <div className={styles.main}>
      <div className={styles.music_box}>
        <div className={styles.music}>
          <div className={styles.musicimg}>
          <Image
            src="/images/music.png"
            alt="Description of image"
            width={88}
            height={89}
          />
          </div>
          <div className={styles.items}>
            <div className={styles.playing}>
              <p>Playing</p>
            </div>
            <Image
              src="/icons/playericons/mask.svg"
              alt="image"
              width={28}
              height={19}
            />
          </div>
        </div>
        
        <div className={styles.about_music}>
          <div className={styles.contents}>
            <p className={styles.title}>Glennon Doyle & Cadence13</p>
            <p className={styles.desc}>
              Episode 299: The Horrific Murder of Dorothy..
            </p>
            <p className={styles.title}>Morbid: A True Crime Podcast</p>
          </div>
          <div className={styles.icons}>
            <Image
              src="/icons/playericons/chapters.svg"
              alt="image"
              width={25}
              height={25}
            />
            <Image
              src="/icons/playericons/captions.svg"
              alt="image"
              width={25}
              height={25}
            />
            <Image
              src="/icons/playericons/info.svg"
              alt="image"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
      <div className={styles.player_section}>
        <div className={styles.playing_items}>
        <Image
            src="/icons/playericons/prev.svg"
            alt="image"
            width={25}
            height={25}
          />
          <Image
            src="/icons/playericons/seconds-skips-left.svg"
            alt="image"
            width={40}
            height={40}
          />
          <Image
            src="/icons/playericons/play.svg"
            alt="image"
            width={53}
            height={53}
          />
          <Image
            src="/icons/playericons/seconds-skips-right.svg"
            alt="image"
            width={40}
            height={40}
          />
          <Image
            src="/icons/playericons/next.svg"
            alt="image"
            width={25}
            height={25}
          />
        </div>
        <div className={styles.music_times}>
            <p className={styles.time}>1:12</p>
            <Image
            src="/icons/playericons/music-playtime.svg"
            alt="image"
            width={527}
            height={5}
          />
            <p className={styles.time}>3:12</p>
        </div>
      </div>
      <div className={styles.end_section}>
        <div className={styles.top_section}>
        <Image
            src="/icons/playericons/menu.svg"
            alt="image"
            width={35}
            height={35}
          />
          <Image
            src="/icons/playericons/expand.svg"
            alt="image"
            width={30}
            height={30}
          />

        </div>
        <div className={styles.bottom_section}>
        <Image
            src="/icons/playericons/speed.svg"
            alt="image"
            width={35}
            height={35}
          />
          <Image
            src="/icons/playericons/speaker.svg"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            src="/icons/playericons/like.svg"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            src="/icons/playericons/save.svg"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            src="/icons/playericons/plus.svg"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            src="/icons/playericons/playlist.svg"
            alt="image"
            width={30}
            height={30}
          />

        </div>

      </div>
    </div>
  );
}

export default PlayerComponents;
