import {
  AnimationObjProps,
  TransitionConfig,
  ViewAnimationControllerProps,
} from "./types";
import { cn } from "../../lib/utils";
import transitions from "./lib/transitions.lib";
import { motion, useInView } from "motion/react";
import React, { FC, memo, useId, useMemo, useRef } from "react";
import { useAnimationMixer } from "./hooks/use-animation-mixer";
import animations from "./lib/animate.lib";
import dynamic from "next/dynamic";

const Container: FC<ViewAnimationControllerProps> = (props) => {
  const {
    children,
    elementType = "div",
    className,
    delay = 0,
    isAnimationStopped = false,
    isControlled = false,
    duration = 0.5,
    reverse = false,
    transition,
    mode,
    configView = { once: true, amount: 0.5 },
  } = props;

  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, configView);
  const id = useId();

  const animationsToMix = useMemo(() => {
    return Array.isArray(mode)
      ? mode.map((key) => animations[key] || { initial: {}, animate: {} })
      : [animations[mode] || { initial: {}, animate: {} }];
  }, [mode]);

  const { initial, animate } = useAnimationMixer({
    animations: animationsToMix as AnimationObjProps[],
    reverse,
  });

  const transitionConfig: TransitionConfig = useMemo(() => {
    const defaultTransition = transitions[transition || "default"];
    if (isAnimationStopped) {
      return {
        ...defaultTransition,
        duration: duration || defaultTransition.duration,
        delay: 0,
      };
    }
    return {
      ...defaultTransition,
      duration: duration || defaultTransition.duration,
      delay,
    };
  }, [isAnimationStopped]);

  const animationState = useMemo(() => {
    if (isAnimationStopped) {
      return { ...animations["opacity"].animate, ...animate };
    }

    if (isControlled) {
      if (typeof isControlled === "object" && "trigger" in isControlled) {
        return isControlled.trigger ? animate : initial;
      }
    }

    return isInView ? animate : initial;
  }, [isAnimationStopped, isInView, isControlled, initial, animate]);

  const initialState = useMemo(() => {
    if (isAnimationStopped) {
      return { ...animations["opacity"].initial, ...initial };
    }
    return initial;
  }, [isAnimationStopped, initial]);

  return React.createElement(
    motion[elementType as keyof typeof motion] as React.ElementType,
    {
      className: cn("view-animation-container", className),
      ref,
      key: id,
      initial: initialState,
      animate: animationState,
      transition: transitionConfig,
    },
    children
  );
};

/**
 * A container component that handles view-based animations using Framer Motion.
 *
 * @component
 * @param {ViewAnimationControllerProps} props - The properties for the animation container.
 * @param {React.ReactNode} props.children - The child elements to be animated.
 * @param {string} [props.elementType="div"] - The HTML element type for the container.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {number} [props.delay=0] - Delay before the animation starts.
 * @param {boolean} [props.isAnimationStopped=false] - Flag to stop the animation.
 * @param {boolean | { trigger: boolean }} [props.isControlled=false] - Control animation externally.
 * @param {number} [props.duration=0.5] - Animation duration in seconds.
 * @param {boolean} [props.reverse=false] - Whether to reverse the animation.
 * @param {string} [props.transition] - The transition type.
 * @param {string | string[]} [props.mode] - The animation mode(s) to apply.
 * @param {{ once?: boolean, amount?: number }} [props.configView={ once: true, amount: 0.5 }] - View configuration for triggering animations.
 * @returns {JSX.Element} - The animated container element.
 */

const MotionContainer = dynamic(
  () => Promise.resolve(memo(Container as typeof Container)),
  { ssr: false }
);

export default MotionContainer;
