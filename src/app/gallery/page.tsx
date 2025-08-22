"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 🎨 Gallery Configuration - Just modify this array to update your gallery!
  const galleryConfig = [
    {
      images: ["volunteers-01.jpg", "volunteers-02.jpg"],
      description:
        "Volunteers from the community helping to support the children in the community",
    },
    {
      images: [
        "business-01.jpg",
        "business-02.jpg",
        "business-03.jpg",
        "business-04.jpg",
      ],
      description:
        "Empowering students with business skills for a brighter future",
    },
    {
      images: ["kids3-5-01.jpg", "kids3-5-02.jpg", "kids3-5-03.jpg"],
      description: "English class for children ages 3–5",
    },
    {
      images: [
        "kids8-11-01.jpg",
        "kids8-11-02.jpg",
        "kids8-11-03.jpg",
        "kids8-11-04.jpg",
      ],
      description: "English class for children ages 8-11",
    },
    {
      images: ["kids8-11-06.jpg", "kids8-11-05.jpg"],
      description: "English class for children ages 8-11",
    },
    {
      images: ["early-marriage-01.jpg", "early-marriage-02.jpg"],
      description: "Early marriage prevention awareness session",
    },
    {
      images: ["humahive-02.jpg", "humahive-04.jpg"],
      description: "Women's Training Workshop",
    },
    {
      images: ["eyeexam-01.jpg", "eyeexam-02.jpg"],
      description:
        "In partnership with Dot Glasses, HumAhive provides vision support to community members in need.",
    },
    {
      images: ["humahive-06.jpg", "humahive-07.jpg"],
      description:
        "We met with children from various communities to listen to their perspectives on the challenges that keep them from attending school.",
    },
  ];

  // Prepare all images for lightbox
  const allImages = galleryConfig.flatMap((item) =>
    item.images.map((imageName) => ({
      src: `/images/${imageName}`,
      alt: item.description,
    }))
  );

  // Handle image click
  const handleImageClick = (imageName: string) => {
    const globalIndex = allImages.findIndex(
      (img) => img.src === `/images/${imageName}`
    );
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="section bg-soft">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-1 mb-8">Stories & Gallery</h1>
            <p className="body-xl max-w-3xl mx-auto">
              Discover the transformative impact of our work through real
              stories and moments from our community
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="masonry-grid">
            {galleryConfig.map((item, index) => {
              // Images (single or multiple)
              if (item.images && item.images.length > 0) {
                const isMultipleImages = item.images.length > 1;
                const hasText = item.description;

                return (
                  <div
                    key={index}
                    className={`masonry-item ${
                      isMultipleImages ? "masonry-item-large" : ""
                    } ${!hasText ? "masonry-item-small" : ""}`}
                  >
                    {/* Images */}
                    {isMultipleImages ? (
                      // Multiple images grid
                      <div
                        className={`grid gap-2 mb-4 ${
                          item.images.length === 2
                            ? "grid-cols-1"
                            : item.images.length === 3
                            ? "grid-cols-2"
                            : "grid-cols-2"
                        }`}
                      >
                        {item.images.map((imageName, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`relative overflow-hidden rounded-xl cursor-pointer transition-transform hover:scale-103 ${
                              item.images.length === 3 && imgIndex === 0
                                ? "col-span-2"
                                : ""
                            }`}
                            onClick={() => handleImageClick(imageName)}
                          >
                            <Image
                              src={`/images/${imageName}`}
                              alt={`Gallery image ${imgIndex + 1}`}
                              width={400}
                              height={300}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Single image
                      <div
                        className="relative overflow-hidden rounded-2xl mb-4 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => handleImageClick(item.images[0])}
                      >
                        <Image
                          src={`/images/${item.images[0]}`}
                          alt="Gallery image"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    {/* Text content */}
                    {hasText && (
                      <div>
                        {item.description && (
                          <p className="body-base">{item.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={allImages}
        render={{
          buttonPrev: allImages.length <= 1 ? () => null : undefined,
          buttonNext: allImages.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
}
