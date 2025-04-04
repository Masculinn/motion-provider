import {
  AnimationKeys,
  AnimationQueueAnimationProps,
} from "../components/motion/types";
import MotionContainer from "../components/motion/motion-container";
import Head from "next/head";
import MotionQueue from "../components/motion/motion-queue";
import { Badge } from "../components/ui/badge";
import React from "react";
import cardsLib from "../lib/root/cards.lib";
import { Card } from "../components/card";
import getRandomAnimation from "../components/motion/utils/getRandomAnimation";

const cardAnimations = Array.from({ length: cardsLib.length }).fill({
  mode: ["filterBlurIn", "fadeRight"],
  duration: 0.5,
  configView: { once: false, amount: 0.5 },
  reverse: false,
  delay: 0,
  transition: "smooth",
} as AnimationQueueAnimationProps);

const title = String("Motion Provider.").split("");

export default function Home() {
  return (
    <>
      <Head>
        <title>Motion Provider</title>
      </Head>
      <MotionContainer
        mode={["fadeIn"]}
        transition="fadeRotate"
        elementType="div"
        duration={4}
        className="fixed bg-gradient-to-br from-[#2b75cffd] via-15% to-transparent lg:h-96 lg:w-96 h-36 w-36 rounded-full lg:blur-[120px] blur-[80px] -top-8 -left-8 z-10"
      />

      <section className="max-w-7xl mx-auto h-screen relative">
        <div className="h-2/3 w-full justify-center flex items-center flex-col  -mt-16">
          <Badge variant="default">All Systems Active.</Badge>
          <div className="flex flex-wrap">
            <MotionQueue
              isDynamicallyQueued
              className="lg:text-8xl text-3xl tracking-tighter font-extralight px-1 text-transparent bg-clip-text bg-linear-to-b from-white to-transparent"
              animations={title.map((_) => {
                return {
                  mode: getRandomAnimation({ count: 1 }) as AnimationKeys[],
                  transition: "cubicFastEnd",
                  duration: 2,
                };
              })}
              elementType={"span"}
              duration={0.25}
              delayLogic="linear"
              children={title}
            />
          </div>
        </div>
        <div className="h-1/3 w-full grid grid-cols-2 lg:gap-4 gap-2 -mt-36">
          <MotionQueue
            duration={0.5}
            elementType="div"
            delayLogic="linear"
            children={cardsLib.map((card, index) => (
              <Card key={index} {...card} />
            ))}
            animations={cardAnimations as AnimationQueueAnimationProps[]}
            isDynamicallyQueued
          />
        </div>
      </section>
    </>
  );
}
