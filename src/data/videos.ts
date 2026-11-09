export type GalleryVideo = {
  title: string;
  description: string;
  duration: string;
  /** Local cover image shown until the visitor presses play. */
  poster: string;
} & ({ provider: "youtube"; youtubeId: string } | { provider: "file"; src: string });

export const communityVideo: GalleryVideo = {
  "provider": "youtube",
  "youtubeId": "gR8P29kkBXY",
  "poster": "/images/videos/peace-founder.jpg",
  "title": "Peace is a paradise",
  "description": "Community members share what peace means to them.",
  "duration": "1:57"
};

export const yvonneVideo: GalleryVideo = {
  "provider": "youtube",
  "youtubeId": "1I1otTEK4A0",
  "poster": "/images/videos/yvonne-0027.jpg",
  "title": "Yvonne on mentoring other women",
  "description": "Yvonne talks about mentoring, her aspirations, and learning to make soap through HumAhive.",
  "duration": "3:22"
};
