import { AnimationLibraryProps } from "../types";

const animations: AnimationLibraryProps = {
  /* ------------------- Default Animation(s) ------------------ */
  default: {
    initial: {},
    animate: {},
  },
  //Never remove opacity from this lib otherwise it will break the logic
  opacity: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  spin: {
    initial: { rotate: 0 },
    animate: { rotate: -360 },
  },
  /* ------------------- Slide Animations ------------------ */

  slideDown: {
    initial: { y: "-100%" },
    animate: { y: 0 },
  },
  slideLeft: {
    initial: { x: "100%" },
    animate: { x: 0 },
  },
  slideRight: {
    initial: { x: "-100%" },
    animate: { x: 0 },
  },
  slideUp: {
    animate: { y: 0 },
    initial: { y: "100%" },
  },

  /* ------------------- Staggered Animations ------------------ */

  staggeredIn: {
    initial: { x: "-50%" },
    animate: {
      x: 0,
    },
  },
  staggeredOut: {
    initial: { x: "-50%" },
    animate: {
      x: 0,
    },
  },

  /* ------------------- Fade Animations ------------------ */

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
    },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
    },
  },
  fadeRight: {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
    },
  },

  /* ------------------- Zoom & Scale Animations ------------------ */

  scaleZoomIn: {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
  },
  scaleZoomOut: {
    initial: { scale: 1.2 },
    animate: { scale: 1 },
  },
  scaleGrowShrink: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
    },
  },

  /* ------------------- Rotate Animations ------------------ */

  rotateIn: {
    initial: { rotate: -90 },
    animate: { rotate: 0 },
  },
  rotateOut: {
    initial: { rotate: 0 },
    animate: { rotate: 90 },
  },
  rotateFlipX: {
    initial: { rotateX: -180 },
    animate: { rotateX: 0 },
  },
  rotateFlipY: {
    initial: { rotateY: -180 },
    animate: { rotateY: 0 },
  },
  rotateSwing: {
    initial: { rotate: 0 },
    animate: {
      rotate: [15, -10, 5, -5, 0],
    },
  },
  rotateClockwise: {
    initial: { rotate: -45 },
    animate: {
      rotate: 0,
    },
  },
  rotateRoll: {
    initial: { rotateZ: -120 },
    animate: {
      rotateZ: 0,
    },
  },
  rotating360: {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
    },
  },

  /* ------------------- Bounce Animations ------------------ */

  bounceY: {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 10, -10, 5, 0],
    },
  },
  bounceX: {
    initial: { x: 0 },
    animate: {
      x: [-10, 10, -10, 10, -5, 5, 0],
    },
  },
  rotateBounce: {
    initial: { rotate: -90, y: 0 },
    animate: {
      rotate: [0, 15, -10, 5, 0],
      y: [0, -20, 10, -10, 0],
    },
  },
  elasticBounce: {
    initial: { y: 0 },
    animate: {
      y: [0, -30, 20, -15, 5, 0],
    },
  },
  bounceInOut: {
    initial: { y: 0 },
    animate: {
      y: [0, -40, 20, -10, 0],
    },
  },

  /* ------------------- Burak's special Animations ------------------ */

  burakHeartbeat: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
    },
  },
  burakRubberBand: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
    },
  },
  burakWobble: {
    initial: { x: 0, rotate: 0 },
    animate: {
      x: [0, -20, 15, -10, 5, 0],
      rotate: [0, -5, 3, -3, 0],
    },
  },
  burakPulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
    },
  },

  /* ------------------- Skew Animations ------------------ */

  skewX: {
    initial: { skewX: 30 },
    animate: {
      skewX: 0,
    },
  },

  /* ------------------- Custom Animations ------------------ */

  textShimmer: {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0, 0, 1],
    },
  },
  swingHorizontal: {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -5, 5, 0],
    },
  },
  flash: {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0, 1],
    },
  },
  hoverEffect: {
    initial: { scale: 1 },
    animate: {
      scale: 1.1,
    },
  },
  wave: {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 15, -15, 15, -15, 0],
    },
  },

  /**
   *   Animations like Joe Biden(alien)
   *   no need for second animation object
   *   into mode property of <ViewAnimationsContainer />
   *
   */

  funChickenDance: {
    initial: { rotate: 0, x: 0 },
    animate: {
      rotate: [0, 10, -10, 10, -10, 0],
      x: [0, 5, -5, 5, -5, 0],
    },
  },
  funJellyFish: {
    initial: { scale: 1, y: 0 },
    animate: {
      scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
      y: [0, -10, 10, -5, 5, 0],
    },
  },
  funRocketBoost: {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: [50, 0, -10, 0],
      opacity: 1,
    },
  },
  funDizzyLizard: {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: [0, 360, 720, 1080, 1440],
      scale: [1, 1.2, 0.8, 1],
    },
  },
  funBlobMorph: {
    initial: { scale: 1, borderRadius: "0%" },
    animate: {
      scale: [1, 1.2, 0.8, 1],
      borderRadius: ["0%", "50%", "25%", "50%", "0%"],
    },
  },
  funMoonWalk: {
    initial: { x: 0, opacity: 1 },
    animate: {
      x: [0, -10, 20, -30, 40, 0],
      opacity: [1, 0.8, 0.6, 0.4, 0.2, 1],
    },
  },
  funPeekABoo: {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.5, 0.5, 1],
      opacity: [0, 1, 0, 1],
    },
  },
  funSnailTrail: {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: ["-100%", "-50%", "-25%", "-10%", "0%"],
      opacity: [0, 0.3, 0.5, 0.8, 1],
    },
  },
  funPopcornPop: {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [0, -20, 10, -5, 2, 0],
      scale: [1, 1.1, 1.2, 0.9, 1.05, 1],
    },
  },
  funYoYoSpin: {
    initial: { rotate: 0, y: 0 },
    animate: {
      rotate: [0, 360, -360, 360],
      y: [0, -10, 20, -10, 0],
    },
  },
  funWarpDrive: {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: [0.5, 1.5, 0.7, 1],
      opacity: [0, 0.5, 1, 1],
    },
  },
  funSpringFling: {
    initial: { y: 0 },
    animate: {
      y: [0, -50, 25, -12, 6, 0],
    },
  },
  funTwinkleToes: {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.2, 0.8, 1],
      opacity: [0, 0.5, 0.8, 1],
    },
  },
  funGhostFloat: {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: [20, 10, 5, 0, -5, -10, 0],
      opacity: [0, 0.3, 0.6, 0.9, 1],
    },
  },

  /* ------------------- Filter Animations ------------------ */

  filterBlurIn: {
    initial: { filter: "blur(10px)" },
    animate: {
      filter: "blur(0px)",
    },
  },
  filterBlurOut: {
    initial: { filter: "blur(0px)" },
    animate: {
      filter: "blur(10px)",
    },
  },
  filterBrightnessFade: {
    initial: { filter: "brightness(0.5)" },
    animate: { filter: "brightness(1)" },
  },
  filterContrastShift: {
    initial: { filter: "contrast(50%)" },
    animate: { filter: "contrast(100%)" },
  },
  filterGrayscaleFade: {
    initial: { filter: "grayscale(100%)" },
    animate: { filter: "grayscale(0%)" },
  },
  filterHueRotate: {
    initial: { filter: "hue-rotate(0deg)" },
    animate: { filter: "hue-rotate(360deg)" },
  },
  filterInvertColors: {
    initial: { filter: "invert(0%)" },
    animate: { filter: "invert(100%)" },
  },
  filterSaturateIncrease: {
    initial: { filter: "saturate(50%)" },
    animate: { filter: "saturate(200%)" },
  },
  filterSepiaTone: {
    initial: { filter: "sepia(0%)" },
    animate: { filter: "sepia(100%)" },
  },

  /* ------------------- 3D Translate Animations ------------------ */

  translate3dIn: {
    initial: { transform: "translate3d(-100px, -100px, -100px)" },
    animate: { transform: "translate3d(0px, 0px, 0px)" },
  },
  translate3dOut: {
    initial: { transform: "translate3d(0px, 0px, 0px)" },
    animate: { transform: "translate3d(100px, 100px, 100px)" },
  },
  translate3dRotate: {
    initial: { transform: "translate3d(-50px, -50px, -50px) rotate(0deg)" },
    animate: { transform: "translate3d(0px, 0px, 0px) rotate(360deg)" },
  },
  translate3dZoom: {
    initial: { transform: "translate3d(-50px, 0px, -100px) scale(0.5)" },
    animate: { transform: "translate3d(0px, 0px, 0px) scale(1)" },
  },
  translate3dBounce: {
    initial: { transform: "translate3d(0px, 0px, 0px)" },
    animate: {
      transform: [
        "translate3d(0px, 0px, 0px)",
        "translate3d(0px, -30px, 0px)",
        "translate3d(0px, 15px, 0px)",
        "translate3d(0px, 0px, 0px)",
      ],
    },
  },
  translate3dWave: {
    initial: { transform: "translate3d(0px, 0px, 0px)" },
    animate: {
      transform: [
        "translate3d(0px, 0px, 0px)",
        "translate3d(10px, 0px, 10px)",
        "translate3d(-10px, 0px, -10px)",
        "translate3d(0px, 0px, 0px)",
      ],
    },
  },
  translate3dZigZag: {
    initial: { transform: "translate3d(0px, 0px, 0px)" },
    animate: {
      transform: [
        "translate3d(0px, 0px, 0px)",
        "translate3d(20px, -10px, 10px)",
        "translate3d(-20px, 10px, -10px)",
        "translate3d(0px, 0px, 0px)",
      ],
    },
  },

  /* ------------------- Add Your Custom Animation(s) Here ------------------ */
};

export default animations;
