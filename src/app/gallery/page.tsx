"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import { galleryGroups } from "./media";
import styles from "./gallery.module.css";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"));
const allPhotos = galleryGroups.flatMap((group) => group.photos);
const allVideos = galleryGroups.flatMap((group) => group.videos);

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div>
      <section className="section bg-soft">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-1 mb-8">Stories &amp; Gallery</h1>
            <p className="body-xl max-w-3xl mx-auto">
              Discover the transformative impact of our work through real
              stories and moments from our community.
            </p>
          </div>
          <nav aria-label="Gallery topics" className={styles.topics}>
            {galleryGroups.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className={`page-container ${styles.groups}`}>
        {allVideos.map((video) => (
          <section
            key={video.provider === "youtube" ? video.youtubeId : video.src}
            className={styles.group}
            aria-label={video.title}
          >
            <div className={styles.videoContainer}>
              <header className={styles.groupHeader}>
                <h2 className="heading-1">{video.title}</h2>
                <p className="body-lg">{video.description}</p>
              </header>
              <VideoCard video={video} showCaption={false} />
            </div>
          </section>
        ))}

        {galleryGroups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            className={styles.group}
          >
            <header className={styles.groupHeader}>
              <h2 id={`${group.id}-title`} className="heading-1">
                {group.title}
              </h2>
              <p className="body-lg">{group.description}</p>
            </header>

            {group.photos.length > 0 && (
              <div className={styles.photoGrid}>
                {group.photos.map((photo) => (
                  <button
                    key={photo.src}
                    type="button"
                    className={styles.photo}
                    aria-label={`Enlarge photo: ${photo.alt}`}
                    onClick={() =>
                      setLightboxIndex(
                        allPhotos.findIndex((item) => item.src === photo.src)
                      )
                    }
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            )}

          </section>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={allPhotos}
        />
      )}
    </div>
  );
}
