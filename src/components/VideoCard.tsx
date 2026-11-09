"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { GalleryVideo } from "@/data/videos";
import styles from "./VideoCard.module.css";

/**
 * Shows a local cover image with a play button. The YouTube player (or MP4)
 * only loads after the visitor presses play, which keeps the page light and
 * avoids YouTube's own title bar and branding on the cover.
 */
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
      {playing ? (
        video.provider === "youtube" ? (
          <iframe
            className={styles.video}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
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
        )
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
            sizes="(max-width: 1024px) 100vw, 720px"
            className={styles.posterImage}
          />
          <span className={styles.posterShade} aria-hidden="true" />
          <span className={styles.playButton} aria-hidden="true">
            <Play size={28} fill="currentColor" />
          </span>
          <span className={styles.duration} aria-hidden="true">
            {video.duration}
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
