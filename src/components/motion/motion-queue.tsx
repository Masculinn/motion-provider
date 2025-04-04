import {
  AnimationQueueProps,
  DelayLogic,
  ViewAnimationControllerProps,
} from "./types";
import { Children, FC, memo, useMemo } from "react";
import { calculateDelay } from "./utils/calculateDelay";
import MotionContainer from "./motion-container";
import { cn } from "../../lib/utils";

const Container: FC<
  AnimationQueueProps & {
    delayLogic?: DelayLogic;
    customLogic?: (index: number) => number;
  }
> = ({
  animations,
  children,
  className,
  elementType = "div",
  isDynamicallyQueued = false,
  delayByElement,
  duration = 0.5,
  delayLogic = "linear",
  customLogic,
}) => {
  const compute = useMemo(() => {
    if (isDynamicallyQueued) {
      return children.map((_, index) => {
        const calculatedDelay = calculateDelay({
          delayLogic,
          index,
          baseDuration: duration,
          customLogic,
        });
        return {
          ...animations[index],
          delay: delayByElement || calculatedDelay,
        };
      });
    }
    return animations.map((animation, idx) => ({
      ...animation,
      delay:
        delayByElement ??
        calculateDelay({
          delayLogic: "custom",
          index: idx,
          baseDuration: duration,
          customLogic,
        }),
    }));
  }, [animations, children, delayLogic, delayByElement, duration, customLogic]);

  const childItem = useMemo(() => Children.toArray(children), [children]);

  if (animations.length !== children.length) {
    console.warn(
      "MotionQueue ERROR: Animations and children arrays should have the same length."
    );
    return null;
  }

  return (
    <>
      {compute.map((animation, index) => (
        <MotionContainer
          key={index}
          delay={animation.delay}
          {...(animation as ViewAnimationControllerProps)}
          elementType={elementType}
          className={cn(className)}
        >
          {childItem[index]}
        </MotionContainer>
      ))}
    </>
  );
};
import dynamic from "next/dynamic";

/**
 * QueueContainer is a component that renders a queue of animated child elements.
 *
 * It maps each child element with a corresponding animation configuration. The delay for each animation
 * is calculated based on the provided `delayLogic`, a custom function (`customLogic`), and/or a fixed delay (`delayByElement`).
 * When `isDynamicallyQueued` is true, the delay is computed dynamically for each child; otherwise, a custom delay logic is used.
 *
 * If the number of animations does not match the number of children, a warning is logged and the component renders nothing.
 *
 * @component
 * @param {AnimationQueueProps & { delayLogic?: DelayLogic, customLogic?: (index: number) => number }} props - The component props.
 * @param {Array} props.animations - Array of animation configuration objects.
 * @param {React.ReactNode} props.children - The child elements to animate.
 * @param {string} [props.className] - Additional CSS classes for the container.
 * @param {string} [props.elementType="div"] - The HTML element type to be used in the MotionContainer.
 * @param {boolean} [props.isDynamicallyQueued=false] - If true, delays are calculated dynamically for each element.
 * @param {number} [props.delayByElement] - Fixed delay to override the calculated delay for each element.
 * @param {number} [props.duration=0.5] - Base duration used for calculating the delay.
 * @param {DelayLogic} [props.delayLogic="linear"] - The logic used to calculate the delay (e.g., "linear", "sinusoidal", etc.).
 * @param {(index: number) => number} [props.customLogic] - Custom function to calculate delay given the element's index.
 * @returns {JSX.Element|null} The rendered queue of animated elements or null if the animations and children arrays have mismatched lengths.
 */
const MotionQueue = dynamic(
  () => Promise.resolve(memo(Container as typeof Container)),
  { ssr: false }
);

export default MotionQueue;
