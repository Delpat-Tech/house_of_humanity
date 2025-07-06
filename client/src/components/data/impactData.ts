
import {
  FaHandsHelping,
  FaHeartbeat,
  FaBookReader,
  FaLeaf,
  FaGift,
  FaUsers,
  FaTint,
  FaHospitalAlt,
  FaSchool,
  FaCar,
  FaRunning,
  FaMusic,
  FaFemale
} from "react-icons/fa";
// Icon mapping
// export const iconMap: { [key: string]: React.ComponentType<any> } = {
//   leaf: FaLeaf,
//   female: FaFemale,
//   heartBeat :  FaHeartbeat,
//   tint: FaTint,
//   handsHelping: FaHandsHelping,
//   gift: FaGift,
//   hospitalAlt: FaHospitalAlt,
//   bookReader: FaBookReader,
//   school: FaSchool,
//   car: FaCar,
//   users: FaUsers,
//   running: FaRunning,
//   music: FaMusic,
// };

export type ImpactItem = {
  icon: string;
  project: string;
  number: string;
  impact: string;
};

export const impactData: ImpactItem[] = [
  {
    icon: "leaf", // Changed from "Leaf" to "leaf"
    project: "Sanskruti",
    number: "30+",
    impact:
      "30 women empowered through organic composting. Community awareness on sustainable farming increased in rural clusters."
  },
  {
    icon: "female", // Changed from "Female" to "female"
    project: "Pad House",
    number: "28,000+",
    impact:
      "girls educated on menstrual hygiene, 8000+ homes sensitized, 75+ schools reached with reusable pad access."
  },
  {
    icon: "tint", // Changed from "Tint" to "tint"
    project: "Rakt Setu",
    number: "2500+",
    impact:
      "blood units donated via 8 camps with 230 volunteers. Emergency cases assisted on-call through donor registry."
  },
  {
    icon: "handsHelping", // Changed from "HandsHelping" to "handsHelping"
    project: "Sahara",
    number: "100+",
    impact:
      "low-cost recovery devices provided. Partnerships formed with 4 physiotherapy centers for outreach."
  },
  {
    icon: "gift", // Changed from "Gift" to "gift"
    project: "Poshan",
    number: "300+ Daily",
    impact:
      "nutritious meals for patient caretakers. Sustained for 480+ days across 3 major government hospitals."
  },
  {
    icon: "hospitalAlt", // Changed from "HospitalAlt" to "hospitalAlt"
    project: "Project Maya",
    number: "200+",
    impact:
      "children engaged daily in recovery wards with educational games, stories and play therapy support."
  },
  {
    icon: "bookReader", // Changed from "BookReader" to "bookReader"
    project: "Bachpaan",
    number: "950+",
    impact:
      "slum children served, 98 Anganwadis supported with education kits and storytelling volunteers weekly."
  },
  {
    icon: "school", // Changed from "School" to "school"
    project: "Project Raah",
    number: "50+",
    impact:
      "students mentored and tutored by volunteers. 2 schools adopted and provided uniforms and books."
  },
  {
    icon: "gift", // Changed from "Gift" to "gift"
    project: "Blanket Drive",
    number: "3000+",
    impact:
      "warm blankets distributed to slum areas during winters over 3 years. Relief during cold waves ensured."
  },
  {
    icon: "gift", // Changed from "Gift" to "gift"
    project: "Sweet Drive",
    number: "2500+",
    impact:
      "sweets gifted each Diwali night in hospitals, railway platforms and night shelters. Festival joy shared."
  },
  {
    icon: "car", // Changed from "Car" to "car"
    project: "Joy of Ride",
    number: "600+",
    impact:
      "kids from 8 slum areas given car rides, fun games and food kits as a special event on Joy of Giving Week."
  },
  {
    icon: "users", // Changed from "Users" to "users"
    project: "Cyclothon",
    number: "1800+",
    impact:
      "youth rode for awareness in 2 citywide events promoting fitness, blood donation and volunteering."
  },
  {
    icon: "running", // Changed from "Running" to "running"
    project: "Marathon",
    number: "2800+",
    impact:
      "runners supported social causes like hygiene, dignity and donation drives in 3 successful editions."
  },
  {
    icon: "music", // Changed from "Music" to "music"
    project: "Concerts",
    number: "7000+",
    impact:
      "attended events. 150+ slum kids performed dance/music. Proceeds helped project fundraising directly."
  },
  {
    icon: "female", // Changed from "Female" to "female"
    project: "Grooming",
    number: "400+",
    impact:
      "girls from slums trained in grooming, basic hygiene, etiquette, and given personal hygiene kits."
  },
  {
    icon: "gift", // Changed from "Gift" to "gift"
    project: "Joyful Gifting",
    number: "1000+",
    impact:
      "children & elders gifted essentials, toys and sweets during festive seasons in shelters and homes."
  }
];
