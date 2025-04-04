import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ImageMotionProps } from "./types";
import { cn } from "../../lib/utils";

const Container: FC<ImageMotionProps> = (props) => {
  const {
    imageUrl,
    pieces = 144,
    controlConfig,
    fallback = (
      <div className="w-full h-full absolute bg-stone-950 animate-pulse" />
    ),
    motionFn,
    animations,
    animationDuration = 3,
    elementClassname,
    wrapperClassName,
    isDynamicallyQueued,
    transition = "smooth",
    customDelayLogic,
    delayLogic = "sinusoidal",
    totalDelay = 0,
    configView = { once: true, amount: "some" },
  } = props;

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  const columns = useMemo(() => Math.ceil(Math.sqrt(pieces)), [pieces]);
  const rows = useMemo(() => Math.ceil(pieces / columns), [pieces, columns]);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [triggers, setTriggers] = useState<Record<number, boolean>>({});
  const gridRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const handleGridInteraction = useCallback(
    (e: React.MouseEvent) => {
      if (!motionFn || !gridRef.current) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = gridRef?.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const col = Math.floor((x / rect.width) * columns);
        const row = Math.floor((y / rect.height) * rows);
        const index = row * columns + col;

        if (index >= 0 && index < pieces) {
          const currCol = index % columns;
          const currRow = Math.floor(index / columns);
          const n: number[] = [];

          for (let r = currRow - 1; r <= currRow + 1; r++) {
            for (let c = currCol - 1; c <= currCol + 1; c++) {
              if (r >= 0 && r < rows && c >= 0 && c < columns) {
                const i = r * columns + c;
                if (i < pieces) n.push(i);
              }
            }
          }

          setTriggers((prev) => ({
            ...prev,
            ...Object.fromEntries(n.map((idx) => [idx, true])),
          }));
        }
      });
    },
    [columns, rows, pieces, motionFn]
  );

  const gridPieces = useMemo(
    () =>
      Array.from({ length: pieces }).map((_, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);

        return (
          <div
            key={index}
            className="h-full w-full bg-cover bg-no-repeat border-none"
            style={{
              backgroundImage: `url('${imageUrl}')`,
              backgroundSize: `${columns * 100}% ${rows * 100}%`,
              backgroundPosition: `calc(${col} * 100% / ${
                columns - 1
              }) calc(${row} * 100% / ${rows - 1})`,
            }}
          />
        );
      }),
    [pieces, columns, rows, imageUrl]
  );

  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      <div
        ref={gridRef}
        className="grid h-full w-full gap-0"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        onClick={motionFn === "click" ? handleGridInteraction : undefined}
        onMouseMove={motionFn === "hover" ? handleGridInteraction : undefined}
      >
        {!isImageLoaded ? (
          <>{fallback}</>
        ) : (
          <MotionQueue
            elementType="div"
            delayLogic={delayLogic}
            customLogic={customDelayLogic}
            isDynamicallyQueued={isDynamicallyQueued}
            animations={gridPieces.map((_, index) => ({
              mode: animations,
              duration: animationDuration,
              configView,
              delay: totalDelay,
              transition,
              isAnimationStopped: controlConfig?.isAnimationStopped || false,
              reverse: controlConfig?.reverse || false,
              isControlled: {
                trigger: motionFn
                  ? !!triggers[index]
                  : controlConfig?.isControlled ?? true,
              },
            }))}
            className={cn(
              "relative overflow-hidden",
              motionFn && "cursor-pointer",
              elementClassname
            )}
          >
            {gridPieces}
          </MotionQueue>
        )}
      </div>
    </div>
  );
};

import dynamic from "next/dynamic";
import MotionQueue from "./motion-queue";

/**
 * ImageContainer renders an interactive image grid by splitting the image into multiple pieces and applying animations.
 *
 * The component loads an image from the provided URL and divides it into a grid of pieces. It supports interactive
 * animations triggered by mouse click or hover events and uses a queue-based animation system via the `MotionQueue`
 * component. The grid pieces are dynamically animated according to the provided animation settings.
 *
 * @component
 * @param {ImageMotionProps} props - The properties for configuring the image motion.
 * @param {string} props.imageUrl - The URL of the image to load.
 * @param {number} [props.pieces=144] - The number of pieces to divide the image into.
 * @param {object} [props.controlConfig] - Configuration object to control the animation state (e.g. stop, reverse).
 * @param {React.ReactNode} [props.fallback=<div className="w-full h-full absolute bg-stone-950 animate-pulse" />] - Fallback element shown while the image is loading.
 * @param {"click" | "hover"} [props.motionFn] - The event type to trigger grid interactions ("click" or "hover").
 * @param {any} props.animations - The animation key(s) to be applied to each grid piece.
 * @param {number} [props.animationDuration=3] - Duration (in seconds) of the animations.
 * @param {string} [props.elementClassname] - Additional CSS class names for the animated element.
 * @param {string} [props.wrapperClassName] - Additional CSS class names for the wrapper element.
 * @param {boolean} [props.isDynamicallyQueued] - Whether the animations are dynamically queued.
 * @param {string} [props.transition="smooth"] - Transition type for the animations.
 * @param {(index: number) => number} [props.customDelayLogic] - A custom function to calculate delay for each piece based on its index.
 * @param {DelayLogic} [props.delayLogic="sinusoidal"] - The delay logic to use (e.g., "linear", "sinusoidal", etc.).
 * @param {number} [props.totalDelay=0] - Total delay applied to the animation sequence.
 * @param {object} [props.configView={ once: true, amount: "some" }] - Configuration for view-based animation triggering.
 * @returns {JSX.Element} The rendered interactive image grid with animations.
 */
const MotionImage = dynamic(
  () => Promise.resolve(memo(Container as typeof Container)),
  { ssr: false }
);
export default MotionImage;
