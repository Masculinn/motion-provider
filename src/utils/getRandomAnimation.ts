import { GetRandomAnimation, GetRandomAnimationProps } from "../interfaces";
import animations from "../components/MotionProvider/lib/animate.lib";
import { AnimationKeys } from "../components/MotionProvider/types";

export default function getRandomAnimation({
  count,
}: GetRandomAnimationProps): GetRandomAnimation {
  let a: AnimationKeys[] = [];

  if (!count || count <= 0) {
    console.warn("getRandomAnimation requires a count, returned null");
    return undefined;
  }

  for (let i = 0; i < count; i++) {
    a.push(
      Object.keys(animations)[
        Math.floor(Math.random() * Object.keys(animations).length)
      ] as AnimationKeys
    );
  }
  return a as GetRandomAnimation;
}
