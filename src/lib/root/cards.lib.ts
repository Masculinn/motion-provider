import { Boxes, Code, FlaskConical, TableOfContents } from "lucide-react";
import { OverviewCardProps } from "../../interfaces";

export default [
  {
    title: "Overview",
    desc: "Discover the core features of our React animation library.",
    icon: TableOfContents,
    link: "http://localhost:1000/motion-provider/overview",
  },
  {
    title: "Quick Start",
    desc: "Start animating your components in just a few steps.",
    icon: Code,
    link: "http://localhost:1000/motion-provider/quick-start",
  },
  {
    title: "Examples",
    desc: "Explore practical examples to kickstart your animations.",
    icon: Boxes,
    link: "http://localhost:1000/motion-provider/examples",
  },
  {
    title: "Motion Engine",
    desc: "Power your animations with a high-performance engine.",
    icon: FlaskConical,
    link: "http://localhost:1000/motion-provider/motion-engine",
  },
] satisfies OverviewCardProps[];
