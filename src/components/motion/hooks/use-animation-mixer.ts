import { useMemo } from "react";
import {
  AnimationObjProps,
  UseAnimationMixerProps,
  UseOutputAnimationMixerProps,
} from "../types";

export const useAnimationMixer = ({
  animations: a,
  reverse,
}: UseAnimationMixerProps): UseOutputAnimationMixerProps => {
  const combinedAnimations = useMemo(() => {
    if (!Array.isArray(a) || a.length === 0) {
      console.warn("Animations should be a non-empty array.");
      return { initial: {}, animate: {} };
    }

    const mergedInitial = a.reduce(
      (acc, anim) => ({ ...acc, ...anim.initial }),
      {} as AnimationObjProps
    );
    const mergedAnimate = a.reduce(
      (acc, anim) => ({ ...acc, ...anim.animate }),
      {} as AnimationObjProps
    );

    return reverse
      ? { initial: mergedAnimate, animate: mergedInitial }
      : { initial: mergedInitial, animate: mergedAnimate };
  }, [a, reverse]);

  return combinedAnimations;
};
