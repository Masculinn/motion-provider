import React, { FC, memo, useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { AnimationKeys, ImageQueueProps } from "./types/index";

const Container: FC<ImageQueueProps> = (props) => {
  const {
    images = [],
    controlConfig,
    enterAnimation,
    exitAnimation,
    wrapperClassName = "relative",
    animationDuration = 2,
    configView = { once: false, amount: "some" },
    customDelayLogic,
    delayLogic = "sinusoidal",
    pieces = 121,
    elementClassname,
    fallback = (
      <div className="w-full h-full absolute bg-stone-950 animate-pulse" />
    ),
    isDynamicallyQueued,
    motionFn,
    totalDelay = 0,
    transition = "smooth",
  } = props;

  const [time, setTime] = useState<number>(0);
  const [currImgIdx, setCurrImgIdx] = useState<number>(0);
  const [animation, setAnimation] = useState<AnimationKeys[] | AnimationKeys>(
    enterAnimation
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDynamicallyQueued && images.length > 0) {
      const trigger = time % (animationDuration * 2);

      const halfDuration = animationDuration;

      if (trigger === 0) {
        setCurrImgIdx((prev) => (prev + 1) % images.length);
        setAnimation(enterAnimation);
      }

      if (trigger === halfDuration) {
        setTimeout(
          () => setAnimation(exitAnimation),
          (animationDuration / 2) * 1000
        );
      }
    }
  }, [
    time,
    images,
    isDynamicallyQueued,
    animationDuration,
    enterAnimation,
    exitAnimation,
  ]);

  if (images.length === 0) return fallback;

  return useMemo(
    () => (
      <div className={cn("overflow-hidden h-full w-full", wrapperClassName)}>
        <MotionImage
          pieces={pieces}
          imageUrl={images[currImgIdx]}
          animations={animation}
          animationDuration={animationDuration / 2}
          configView={configView}
          customDelayLogic={customDelayLogic}
          controlConfig={{
            isControlled: true,
            isAnimationStopped: false,
            reverse: false,
          }}
          delayLogic={delayLogic}
          totalDelay={totalDelay}
          isDynamicallyQueued={isDynamicallyQueued}
          motionFn={motionFn}
          wrapperClassName="w-full h-full"
          transition={transition}
          fallback={fallback}
          elementClassname={elementClassname}
        />
      </div>
    ),
    [
      currImgIdx,
      animation,
      images,
      wrapperClassName,
      pieces,
      enterAnimation,
      configView,
      controlConfig,
      customDelayLogic,
      delayLogic,
      totalDelay,
      isDynamicallyQueued,
      motionFn,
      transition,
      fallback,
      elementClassname,
    ]
  );
};

import dynamic from "next/dynamic";
import MotionImage from "./motion-image";

/**
 * ImageQueueContainer renders an animated image queue that cycles through an array of images
 * using enter and exit animations. The component updates the displayed image on a timer,
 * triggering animations for entering and exiting images. It relies on the MotionImage component
 * (dynamically imported) to render the animated image.
 *
 * @component
 * @param {ImageQueueProps} props - The props for configuring the image queue.
 * @param {string[]} [props.images=[]] - Array of image URLs to display.
 * @param {object} props.controlConfig - Configuration object to control the animation state.
 * @param {AnimationKeys|AnimationKeys[]} props.enterAnimation - Animation key(s) for the entering image.
 * @param {AnimationKeys|AnimationKeys[]} props.exitAnimation - Animation key(s) for the exiting image.
 * @param {string} [props.wrapperClassName="relative"] - Additional CSS classes for the outer wrapper.
 * @param {number} [props.animationDuration=2] - The duration (in seconds) of the animation cycle.
 * @param {object} [props.configView={ once: false, amount: "some" }] - Configuration for view-based triggering of animations.
 * @param {(index: number) => number} [props.customDelayLogic] - A custom function to calculate delay based on index.
 * @param {DelayLogic} [props.delayLogic="sinusoidal"] - The delay logic to apply (e.g., "linear", "sinusoidal").
 * @param {number} [props.pieces=121] - The number of pieces to segment the image into.
 * @param {string} [props.elementClassname] - Additional CSS classes for the animated element.
 * @param {React.ReactNode} [props.fallback=<div className="w-full h-full absolute bg-stone-950 animate-pulse" />] - Fallback element to display if no images are provided.
 * @param {boolean} [props.isDynamicallyQueued] - Whether the image queue operates dynamically.
 * @param {"click" | "hover"} [props.motionFn] - The event type to trigger motion interactions.
 * @param {number} [props.totalDelay=0] - Total delay applied to the animation sequence.
 * @param {string} [props.transition="smooth"] - The transition type to use for animations.
 * @returns {JSX.Element} The rendered ImageQueueContainer component.
 */
const MotionImageQueue = dynamic(
  () => Promise.resolve(memo(Container as typeof Container)),
  { ssr: false }
);

export default MotionImageQueue;
