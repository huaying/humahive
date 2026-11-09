export type GalleryVideo = {
  title: string;
  description: string;
  duration: string;
} & (
  | { provider: "youtube"; youtubeId: string }
  | { provider: "file"; src: string; poster: string }
);

export const communityVideo: GalleryVideo = {
  "provider": "youtube",
  "youtubeId": "gR8P29kkBXY",
  "title": "Peace is a paradise",
  "description": "Community members share what peace means to them.",
  "duration": "1:57"
};

export const yvonneVideo: GalleryVideo = {
  "provider": "youtube",
  "youtubeId": "1I1otTEK4A0",
  "title": "Yvonne on mentoring other women",
  "description": "Yvonne talks about mentoring, her aspirations, and learning to make soap through HumAhive.",
  "duration": "3:22"
};
