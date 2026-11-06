import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    number: "01",
    title: "Gestion des objectifs (PGO)",
    category: "Enterprise application · Information system",
    year: "2026",
    image: "/images/fieldnotes.svg",
    alt: "Abstract project management and information workflow illustration",
    description:
      "A web platform designed to replace a heavy Access-based workflow and centralize objective tracking, deadlines, document submissions, progress updates, and notifications. Built around role-based access and department workflows.",
    technologies: ["React", "Vite", "Tailwind CSS", "ASP.NET Core 8", "Entity Framework Core", "MariaDB", "SignalR", "JWT"],
  },
  {
    number: "02",
    title: "Wsalni",
    category: "Mobile application · React Native",
    year: "2026",
    image: "/images/common-ground.svg",
    alt: "Geometric illustration representing a mobile application",
    description:
      "A React Native application developed with Expo, focused on a clean mobile experience and authentication flows. The project uses NativeWind for styling and reusable interface components.",
    technologies: ["React Native", "Expo", "Expo Router", "NativeWind", "TypeScript"],
  },
  {
    number: "03",
    title: "Wallet API",
    category: "Backend · API development",
    year: "2026",
    image: "/images/northstar.svg",
    alt: "Abstract blue illustration representing backend data services",
    description:
      "A backend project for a wallet application, using Node.js, Express, Drizzle ORM, and a Neon-hosted PostgreSQL database. The work focuses on API structure, database access, and application-side integration.",
    technologies: ["Node.js", "Express", "Drizzle ORM", "PostgreSQL", "Neon"],
  },
  {
    number: "04",
    title: "Expo Authentication",
    category: "Mobile authentication · OAuth",
    year: "2026",
    image: "/images/sunday-objects.svg",
    alt: "Warm geometric illustration representing a mobile authentication flow",
    description:
      "An Expo and React Native authentication project integrating Clerk and Google OAuth, with Expo Router navigation and TypeScript-based screens.",
    technologies: ["React Native", "Expo", "Clerk", "Google OAuth", "Expo Router", "TypeScript"],
  },
];
