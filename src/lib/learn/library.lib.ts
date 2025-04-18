import { MotionProviderLibraryItemProps } from "@/interfaces";
import {
  ArrowBigRightDash,
  BookOpen,
  Box,
  Boxes,
  Sparkle,
  Waypoints,
} from "lucide-react";

export default [
  {
    id: 1,
    title: "Introducing Motion Provider",
    desc: "Discover the core concepts of Motion Provider.",
    icon: BookOpen,
    link: "/learn/introducing-motion-provider",
    level: "beginner",
  },
  {
    id: 2,
    title: "Arhitecture of Motion Provider",
    desc: "Learn the fundamentals of Motion Provider.",
    icon: Waypoints,
    link: "/learn/architecture-of-motion-provider",
    level: "beginner",
  },
  {
    id: 3,
    title: "Understanding Motion Provider",
    desc: "Learn how to get started with Motion Provider.",
    icon: Sparkle,
    link: "/learn/get-started",
    level: "beginner",
  },
  {
    id: 4,
    title: "Quick Start with Next.js",
    desc: "Learn how to install & setup Motion Provider with CLI or manually.",
    icon: ArrowBigRightDash,
    link: "/learn/quick-start",
    level: "beginner",
  },
  {
    id: 5,
    title: "Our Best Friend <MotionContainer /> Essentials & Usage",
    desc: "Learn the core animation component providing 65+ predefined animations across 11 categories.",
    icon: Box,
    link: "/learn/motion-container",
    level: "beginner",
  },
  {
    id: 6,
    title: "Advanced animation sequencer <MotionChain /> Essentials & Usage",
    desc: "Learn advanced animation sequencer for coordinating complex animation timelines across multiple elements.",
    icon: Box,
    link: "/learn/motion-chain",
    level: "intermediate",
  },
  {
    id: 7,
    title:
      "The first motion image component in the world <MotionImage /> Essentials & Usage",
    desc: "21,840+ built-in animation combination variations, learn animating your all images with Motion Image.",
    icon: Box,
    link: "/learn/motion-image",
    level: "intermediate",
  },
  {
    id: 8,
    title: "Text animator <MotionText /> Essentials & Usage",
    desc: "Learn animating your text with Motion Text, ",
    icon: Box,
    link: "/learn/motion-text",
    level: "beginner",
  },
  {
    id: 9,
    title: "Custom animations with Motion Provider utils & hooks",
    desc: "Learn using hooks of the Motion Provider, creating custom animations, getRandomAnimation and more.",
    icon: Boxes,
    link: "/learn/custom-animations",
    level: "intermediate",
  },
  {
    id: 10,
    title: "Centralized Animation System(CAS) - Part 1",
    icon: Boxes,
    desc: "Learn Controlling over the animations, breaking down the single-thread controlling systems.",
    level: "advanced",
    link: "/learn/centralized-animation-system-1",
  },
  {
    id: 11,
    title: "Centralized Animation System(CAS) - Part 2",
    icon: Boxes,
    desc: "Learn the component-thread controlling systems and sequence system.",
    level: "advanced",
    link: "/learn/centralized-animation-system-1",
  },
  {
    id: 12,
    title: "Exit sequencer animations with <MotionLink />",
    icon: Box,
    desc: "Learn how to use Motion Link to create exit layout animations useing the CAS and Motion Link.",
    level: "advanced",
    link: "/learn/motion-link",
  },
  {
    id: 13,
    title: "Creating animation sliders with <MotionMovie />",
    icon: Box,
    desc: "Learn how to use Motion Movie to animate your component in slider manner.",
    level: "advanced",
    link: "/learn/motion-movie",
  },
] as MotionProviderLibraryItemProps[];
