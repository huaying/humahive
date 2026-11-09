import { yvonneVideo, type GalleryVideo } from "@/data/videos";

export type GalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryGroup = {
  id: string;
  title: string;
  description: string;
  photos: GalleryPhoto[];
  videos: GalleryVideo[];
};

// New uploads appear first within each topic; topics with new photos lead the gallery.
export const galleryGroups: GalleryGroup[] = [
  {
    "id": "child-marriage-prevention",
    "title": "Child marriage prevention",
    "description": "Community awareness sessions and collective action against child, early, and forced marriage.",
    "photos": [
      {
        "src": "/images/gallery/campaign-group-01.jpg",
        "alt": "Community members holding a banner campaigning against child, early, and forced marriage",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-participant-02.jpg",
        "alt": "A participant holding up a hand with a campaign marker",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-participant-03.jpg",
        "alt": "A participant showing a campaign marker on their hand",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-participants-01.jpg",
        "alt": "Participants together displaying campaign markers",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-gathering.jpg",
        "alt": "Participants gathered indoors beside the campaign banner",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-group-02.jpg",
        "alt": "Community members gathered outside with the campaign banner",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-group-03.jpg",
        "alt": "A group standing together with the child marriage prevention banner",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/campaign-group-04.jpg",
        "alt": "A closer view of participants holding the campaign banner",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/early-marriage-01.jpg",
        "alt": "Early marriage prevention awareness session",
        "width": 1600,
        "height": 720
      },
      {
        "src": "/images/early-marriage-02.jpg",
        "alt": "Early marriage prevention awareness session",
        "width": 1600,
        "height": 720
      }
    ],
    "videos": []
  },
  {
    "id": "education",
    "title": "Children & education",
    "description": "English classes, school community moments, and conversations about access to education.",
    "photos": [
      {
        "src": "/images/gallery/school-community-01.jpg",
        "alt": "Schoolchildren gathered in front of a HumAhive banner",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/school-community-02.jpg",
        "alt": "Schoolchildren together outside the HumAhive community space",
        "width": 1040,
        "height": 468
      },
      {
        "src": "/images/gallery/school-community-03.jpg",
        "alt": "A student standing beside the HumAhive community banner",
        "width": 1600,
        "height": 720
      },
      {
        "src": "/images/kids3-5-01.jpg",
        "alt": "English class for children ages 3–5",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids3-5-02.jpg",
        "alt": "English class for children ages 3–5",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids3-5-03.jpg",
        "alt": "English class for children ages 3–5",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids8-11-01.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids8-11-02.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids8-11-03.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1280,
        "height": 960
      },
      {
        "src": "/images/kids8-11-04.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/kids8-11-06.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/kids8-11-05.jpg",
        "alt": "English class for children ages 8–11",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/humahive-06.jpg",
        "alt": "Meeting with children to discuss barriers to attending school",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/humahive-07.jpg",
        "alt": "Meeting with children to discuss barriers to attending school",
        "width": 1600,
        "height": 1200
      }
    ],
    "videos": []
  },
  {
    "id": "livelihoods",
    "title": "Women’s empowerment & livelihoods",
    "description": "Business skills, training workshops, and experiences shared by women in our community.",
    "photos": [
      {
        "src": "/images/business-01.jpg",
        "alt": "Community business skills training",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/business-02.jpg",
        "alt": "Community business skills training",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/business-03.jpg",
        "alt": "Community business skills training",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/business-04.jpg",
        "alt": "Community business skills training",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "/images/humahive-02.jpg",
        "alt": "Women’s training workshop",
        "width": 454,
        "height": 204
      },
      {
        "src": "/images/humahive-04.jpg",
        "alt": "Women’s training workshop",
        "width": 910,
        "height": 422
      }
    ],
    "videos": [yvonneVideo]
  },
  {
    "id": "community-support",
    "title": "Community support",
    "description": "Community volunteers supporting children, and vision support in partnership with Dot Glasses.",
    "photos": [
      {
        "src": "/images/volunteers-01.jpg",
        "alt": "Community volunteers supporting children",
        "width": 1040,
        "height": 780
      },
      {
        "src": "/images/volunteers-02.jpg",
        "alt": "Community volunteers supporting children",
        "width": 1040,
        "height": 780
      },
      {
        "src": "/images/eyeexam-01.jpg",
        "alt": "Vision support in partnership with Dot Glasses",
        "width": 500,
        "height": 386
      },
      {
        "src": "/images/eyeexam-02.jpg",
        "alt": "Vision support in partnership with Dot Glasses",
        "width": 502,
        "height": 378
      }
    ],
    "videos": []
  }
];
