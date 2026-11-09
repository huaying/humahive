"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { GalleryVideo } from "@/data/videos";
import styles from "./VideoCard.module.css";

export default function VideoCard({
  video,
  showCaption = true,
}: {
  video: GalleryVideo;
  showCaption?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={styles.videoCard}>
      {video.provider === "youtube" ? (
        <iframe
          className={`${styles.video} ${styles.youtubeFrame}`}
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&playsinline=1&rel=0`}
          title={video.title}
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : playing ? (
        <video
          className={styles.video}
          controls
          autoPlay
          playsInline
          preload="none"
          poster={video.poster}
          aria-label={video.title}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support video playback.{" "}
          <a href={video.src}>Download {video.title}</a>.
        </video>
      ) : (
        <button
          type="button"
          className={styles.videoPoster}
          onClick={() => setPlaying(true)}
          aria-label={`Play ${video.title}, ${video.duration}`}
        >
          <Image
            src={video.poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className={styles.posterImage}
          />
          <span className={styles.playButton}>
            <Play size={22} aria-hidden="true" />
            Watch video · {video.duration}
          </span>
        </button>
      )}
      {showCaption && (
        <figcaption className={styles.videoCaption}>
          <h3 className="heading-3">{video.title}</h3>
          <p className="body-base">{video.description}</p>
        </figcaption>
      )}
    </figure>
  );
}
