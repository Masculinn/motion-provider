import { Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";
import MotionContainer from "../components/MotionProvider/motion-container";
import Head from "next/head";
import MotionQueue from "../components/MotionProvider/motion-queue";
import { AnimationQueueAnimationProps } from "../components/MotionProvider/types";
import { Card as CardContainer } from "../components/ui/card";
import { OverviewCardProps } from "../interfaces";
import { Boxes, Code, FlaskConical, TableOfContents } from "lucide-react";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";
import MotionImage from "../components/MotionProvider/motion-image";
import { Skeleton } from "../components/ui/skeleton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaX } from "react-icons/fa6";

const cards: OverviewCardProps[] = [
  {
    title: "Overview",
    desc: "Discover the core features of our React animation library.",
    icon: <TableOfContents className="w-8 h-8" />,
    link: "http://localhost:1000/motion-provider/overview",
  },
  {
    title: "Quick Start",
    desc: "Start animating your components in just a few steps.",
    icon: <Code />,
    link: "http://localhost:1000/motion-provider/quick-start",
  },
  {
    title: "Examples",
    desc: "Explore practical examples to kickstart your animations.",
    icon: <Boxes className="w-8 h-8" />,
    link: "http://localhost:1000/motion-provider/examples",
  },
  {
    title: "Motion Engine",
    desc: "Power your animations with a high-performance engine.",
    icon: <FlaskConical />,
    link: "http://localhost:1000/motion-provider/motion-engine",
  },
];

const animations = Array.from({ length: cards.length }).fill({
  mode: ["filterBlurIn", "fadeRight"],
  duration: 0.5,
  configView: { once: false, amount: 0.5 },
  reverse: false,
  delay: 0,
  transition: "smooth",
} as AnimationQueueAnimationProps);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Motion Provider</title>
      </Head>
      <nav className="relative  flex items-center justify-end px-8 py-5">
        <div className="flex flex-row items-center justify-center lg:gap-3 gap-2 lg:scale-100 scale-90 p-8 text-white">
          <Link
            href="https://www.linkedin.com/in/burak-bilen-483772227/"
            className="flex hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="lg:w-6 lg:h-6 w-5 h-5" />
          </Link>

          <Link
            href="https://x.com/masculinnnnn"
            className="flex hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaX className="lg:w-6 lg:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/Masculinn"
            target="_blank"
            className="flex hover:text-white"
            rel="noopener noreferrer"
          >
            <FaGithub className="lg:w-6 lg:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://buymeacoffee.com/bilenburakf"
            className="font-bold hover:underline lg:scale-100 scale-90 -mt-[14px]"
            rel="noopener noreferrer"
          >
            <Badge variant={"secondary"}>
              <MotionImage
                isDynamicallyQueued
                totalDelay={0.5}
                animationDuration={1}
                delayLogic="sinusoidal"
                transition="cubicElastic"
                imageUrl="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                pieces={64}
                fallback={
                  <Skeleton className="lg:h-[25px] h-auto w-auto lg:w-[27px] rounded-full" />
                }
                elementClassname="h-full w-full shadow-none border-none"
                wrapperClassName="h-[25px] w-[27px] shadow-none border-none"
                animations={["rotating360", "translate3dIn"]}
              />
              <span className="ml-2">Buy Me A Coffee</span>
            </Badge>
          </Link>
        </div>
      </nav>
      <MotionContainer
        mode={["fadeIn"]}
        transition="smooth"
        elementType="div"
        duration={4}
        className="fixed bg-[#2b75cffd] h-96 w-96 rounded-full blur-[120px] top-0 left-0  z-[999]"
      />
      <section
        className={cn(
          "w-full h-screen flex flex-col justify-center items-center lg:p-48 p-12 relative gap-8 z-0 overflow-hidden",
          inter.className
        )}
      >
        <div className="h-auto max-w-md mx-auto justify-center flex items-center flex-col gap-2 -mt-60">
          <Badge variant="default">All Systems Active.</Badge>
          <MotionContainer
            elementType="div"
            configView={{ once: true, amount: 0.5 }}
            mode={["filterBlurIn", "fadeUp"]}
            transition="smooth"
            duration={1}
            delay={0}
            children={
              <h1 className="lg:text-5xl text-3xl tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Motion Provider
              </h1>
            }
          />
          <MotionContainer
            elementType="h1"
            configView={{ once: true, amount: 0.5 }}
            mode={["filterBlurIn", "fadeIn"]}
            transition="delayedCubic"
            duration={0.5}
            className="text-center text-sm text-stone-300 font-semibold tracking-tighter"
            delay={1}
            children="Accelerate your React component animations by up to 4x with seamless
              performance and precision, built entirely in React and TypeScript
              for a smooth, type-safe development experience."
          />
        </div>
        <div className="w-full h-1/2 grid grid-cols-2 lg:gap-4 gap-2 lg:my-0 lg:px-24">
          <MotionQueue
            duration={0.5}
            elementType="div"
            delayLogic="linear"
            children={cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
            animations={animations as AnimationQueueAnimationProps[]}
            isDynamicallyQueued
          />
        </div>
      </section>
    </>
  );
}

const codeFont = Geist_Mono({ weight: "400", subsets: ["latin"] });

const Card = ({ title, desc, icon, link }: OverviewCardProps) => {
  return (
    <CardContainer className="h-full w-full text-white cursor-pointer hover:bg-stone-900 border-none transition-all duration-300  bg-stone-900/20  group backdrop-blur-md">
      <Link
        target="_blank"
        href={link}
        className=" flex flex-row lg:gap-6 gap-2 justify-center items-center lg:px-8 px-4 w-full h-full "
      >
        <div className="lg:w-16 lg:h-16 w-5 h-5 flex items-center justify-center text-stone-300 group-hover:text-white">
          {icon}
        </div>
        <div className="lg:w-full w-auto h-full items-start justify-center flex flex-col truncate overflow-clip">
          <h2 className={`${codeFont.className} font-bold text-sm`}>{title}</h2>
          <p className="tracking-tighter text-xs text-stone-400 lg:block hidden">
            {desc}
          </p>
        </div>
      </Link>
    </CardContainer>
  );
};
