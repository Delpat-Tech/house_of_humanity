// src/data/impactData.ts
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

import { ReactNode } from "react";

export type ImpactItem = {
  icon: ReactNode;
  project: string;
  number: string;
  impact: string;
};

export const impactData: ImpactItem[] = [
  {
    icon: <FaLeaf />,
    project: "Sanskruti",
    number: "30+",
    impact:
      "30 women empowered through organic composting. Community awareness on sustainable farming increased in rural clusters."
  },
  {
    icon: <FaFemale />,
    project: "Pad House",
    number: "28,000+",
    impact:
      "girls educated on menstrual hygiene, 8000+ homes sensitized, 75+ schools reached with reusable pad access."
  },
  {
    icon: <FaTint />,
    project: "Rakt Setu",
    number: "2500+",
    impact:
      "blood units donated via 8 camps with 230 volunteers. Emergency cases assisted on-call through donor registry."
  },
  {
    icon: <FaHandsHelping />,
    project: "Sahara",
    number: "100+",
    impact:
      "low-cost recovery devices provided. Partnerships formed with 4 physiotherapy centers for outreach."
  },
  {
    icon: <FaGift />,
    project: "Poshan",
    number: "300+ Daily",
    impact:
      "nutritious meals for patient caretakers. Sustained for 480+ days across 3 major government hospitals."
  },
  {
    icon: <FaHospitalAlt />,
    project: "Project Maya",
    number: "200+",
    impact:
      "children engaged daily in recovery wards with educational games, stories and play therapy support."
  },
  {
    icon: <FaBookReader />,
    project: "Bachpaan",
    number: "950+",
    impact:
      "slum children served, 98 Anganwadis supported with education kits and storytelling volunteers weekly."
  },
  {
    icon: <FaSchool />,
    project: "Project Raah",
    number: "50+",
    impact:
      "students mentored and tutored by volunteers. 2 schools adopted and provided uniforms and books."
  },
  {
    icon: <FaGift />,
    project: "Blanket Drive",
    number: "3000+",
    impact:
      "warm blankets distributed to slum areas during winters over 3 years. Relief during cold waves ensured."
  },
  {
    icon: <FaGift />,
    project: "Sweet Drive",
    number: "2500+",
    impact:
      "sweets gifted each Diwali night in hospitals, railway platforms and night shelters. Festival joy shared."
  },
  {
    icon: <FaCar />,
    project: "Joy of Ride",
    number: "600+",
    impact:
      "kids from 8 slum areas given car rides, fun games and food kits as a special event on Joy of Giving Week."
  },
  {
    icon: <FaUsers />,
    project: "Cyclothon",
    number: "1800+",
    impact:
      "youth rode for awareness in 2 citywide events promoting fitness, blood donation and volunteering."
  },
  {
    icon: <FaRunning />,
    project: "Marathon",
    number: "2800+",
    impact:
      "runners supported social causes like hygiene, dignity and donation drives in 3 successful editions."
  },
  {
    icon: <FaMusic />,
    project: "Concerts",
    number: "7000+",
    impact:
      "attended events. 150+ slum kids performed dance/music. Proceeds helped project fundraising directly."
  },
  {
    icon: <FaFemale />,
    project: "Grooming",
    number: "400+",
    impact:
      "girls from slums trained in grooming, basic hygiene, etiquette, and given personal hygiene kits."
  },
  {
    icon: <FaGift />,
    project: "Joyful Gifting",
    number: "1000+",
    impact:
      "children & elders gifted essentials, toys and sweets during festive seasons in shelters and homes."
  }
];
