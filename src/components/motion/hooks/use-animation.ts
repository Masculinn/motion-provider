import { debounce } from "lodash-es";
import { useEffect, useState, useCallback } from "react";
import { UseMotionOutputProps, UseMotionProps } from "../types";

export const useAnimation = (props: UseMotionProps): UseMotionOutputProps => {
  const {
    stopAnimation = false,
    reverseAnimation = false,
    recallDuration = 100,
  } = props;

  const [animationConfig, setAnimationConfig] = useState<UseMotionOutputProps>({
    isAnimationStopped: false,
    reverse: false,
  });

  const handleStopAnimation = useCallback(
    debounce(() => {
      setAnimationConfig({
        isAnimationStopped: true,
        reverse: false,
      });
    }, recallDuration),
    []
  );

  const handleReset = useCallback(
    debounce(() => {
      setAnimationConfig({
        isAnimationStopped: false,
        reverse: false,
      });
    }, recallDuration),
    []
  );

  useEffect(() => {
    if (stopAnimation && !reverseAnimation) {
      setAnimationConfig({
        isAnimationStopped: true,
        reverse: true,
      });

      handleStopAnimation();
    } else if (stopAnimation && reverseAnimation) {
      setAnimationConfig({
        isAnimationStopped: true,
        reverse: false,
      });

      handleReset();
    } else {
      setAnimationConfig({
        isAnimationStopped: false,
        reverse: reverseAnimation,
      });
    }

    return () => {
      handleStopAnimation.cancel();
      handleReset.cancel();
    };
  }, [stopAnimation, reverseAnimation, handleStopAnimation]);

  return animationConfig;
};
