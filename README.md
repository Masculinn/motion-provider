# Motion Provider

<!-- markdownlint-disable first-line-h1 -->
<!-- markdownlint-disable html -->
<!-- markdownlint-disable no-duplicate-header -->

![motion-provider-banner](https://github.com/user-attachments/assets/3d04e609-9104-422e-b6f8-054e3a29d449)

<hr>
<div align="center" style="line-height: 1;">
  <a href="https://burakdev.com/motion-provider" target="_blank" style="margin: 2px;">
    <img alt="Documentation" src="https://img.shields.io/badge/Docs-Motion%20Provider-536af5?color=536af5&logoColor=white" style="display: inline-block; vertical-align: middle;"/>
  </a>
  <a href="https://github.com/Masculinn/motion-provider" target="_blank" style="margin: 2px;">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/Masculinn/motion-provider?style=social"/>
  </a>
</div>
<div align="center" style="line-height: 1;">
  <a href="https://x.com/masculinnnnn" target="_blank" style="margin: 2px;">
    <img alt="Twitter Follow" src="https://img.shields.io/badge/Twitter-@masculinnn-1DA1F2?logo=twitter" style="display: inline-block; vertical-align: middle;"/>
  </a>
</div>

<div align="center" style="line-height: 1;">
  <a href="https://github.com/Masculinn/motion-provider/blob/main/LICENSE" style="margin: 2px;">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-brightgreen"/>
  </a>
</div>

<p align="center">
  <a href="https://burakdev.com/motion-provider"><b>Documentation Application</b>📚</a>
</p>

Dear Fellow Developer,

Thank you for being here and taking the time to explore this project. If you are roaming the industry, you will hear my name often in some social apps, linkedin, x, dev.to, daily.dev etc. Follow me via socials🌟. Over the past month, I’ve poured 160+ hours of passion into crafting this project, aiming to give you everything you need to bring your creative visions to life—without compromises. Do not forget everything free-to-use, open-sourced for the developer who has real passion to make the web better!

With this, you can build:

-🚀 Stunning SaaS platforms,

<p align="center">
  <img width="80%" src="/public/assets/projects/thumbs/saas-thumb.gif">
</p>
-🎯 Pixel-perfect landing pages, 
<p align="center">
  <img width="80%" src="/public/assets/projects/thumbs/nft-thumb.gif">
</p>
-💼 Portfolios that captivate clients
<p align="center">
  <img width="80%" src="public/assets/projects/thumbs/agency-thumb.gif">
</p>

...and truly, anything you imagine. No need to google for animations, No need to copy paste entire complicated components that you feel extremely confused instead here you are simply going through the engines, If you do not have idea about the animations you want to generate kindly press 'roll a dice' button and let the engines generates you fully unique animations among 21,840 animation combination.

Special thanks to Motion team (old name: framer-motion) for being a held on the back side by publishing their animation API's open-sourced to the people ❤️

## Introduction

_I know animations are challenging to implement as well as finding the right library to suit your needs, creating animations for different elements and components, and managing them consistently across your application can be time-consuming and require significant effort and patience._

This is where <MotionContainer /> and useAnimationMixer() comes in. It’s a highly customizable, using a tiny (0.6kb) hook from motion and lightning-fast React component built to simplify the process of adding sophisticated animations. Leveraging the Motion library, it provides developers with a declarative approach to animate child elements based on their visibility in the viewport. With pre-defined animation modes and transition configurations, it eliminates the repetitive work of manually creating animations for every element, streamlining the process while delivering polished results.

Motion Provider is a React animation library that simplifies complex motion design through a centralized animation system (CAS). It provides:

- **Atomic Animation Components**: Pre-built motion primitives (`MotionContainer`, `MotionQueue`, `MotionText`)
- **Synchronized Animations**: Coordinate animations across multiple components
- **Dynamic Control**: Real-time animation control with hooks (`useAnimation`)
- **Cross-Platform**: Works with Next.js, React Native, and WebGL

Key differentiators:

- 🌀 Built-in animation queue system
- 🎮 Imperative animation control
- 🌓 Automatic dark mode support
- 📱 Mobile-first responsive animations

<p align="center">
  <img width="80%" src="https://raw.githubusercontent.com/yourusername/motion-provider/main/demo.gif">
</p>

## 2. Features

<div align="center">

| Feature                        | Description                                                            |
| ------------------------------ | ---------------------------------------------------------------------- |
| Motion Queue System            | Sequential/parallel animations with linear/exponential delay logic     |
| CAS (Central Animation System) | Centralized control for application-wide animation states              |
| Animation Presets              | 40+ pre-built animations (fadeIn, rotateClockwise, filterBlurIn, etc.) |
| Responsive Hooks               | useAnimation, useMotionState, useBreakpoint for dynamic control        |
| TypeSafe API                   | Full TypeScript support with strict animation type checking            |
| Performance Optimized          | WebGL fallbacks and requestAnimationFrame integration                  |

</div>

## 3. Installation

```bash
npx install motion-provider @motion-provider/core
```

### 4. Getting Started

Below is a basic example demonstrating how to integrate Motion Provider into your React application:

```tsx
import React, { useState } from "react";
import { MotionContainer, MotionQueue, useAnimation } from "motion-provider";
import { Button } from "@/components/ui/button";

export default function App() {
  const [reverseAnimation, setReverseAnimation] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const animationConfig = useAnimation({
    stopAnimation,
    reverseAnimation,
    recallDuration: 1,
  });

  return (
    <MotionContainer
      elementType="div"
      mode={["fadeIn", "filterBlurIn"]}
      duration={0.5}
      className="app-container"
    >
      <h1>Welcome to Motion Provider</h1>
      <MotionQueue
        elementType="div"
        duration={1}
        delayLogic="linear"
        isDynamicallyQueued
        animations={[
          {
            mode: reverseAnimation
              ? ["rotateRoll", "fadeOut"]
              : ["rotateClockwise", "fadeIn"],
            duration: 0.5,
          },
          {
            mode: reverseAnimation
              ? ["rotateRoll", "fadeOut"]
              : ["rotateClockwise", "fadeIn"],
            duration: 0.5,
          },
        ]}
      >
        <Button onClick={() => setReverseAnimation((prev) => !prev)}>
          {reverseAnimation ? "Start Animations" : "Reverse Animations"}
        </Button>
        <Button onClick={() => setStopAnimation((prev) => !prev)}>
          {stopAnimation ? "Resume Animations" : "Stop Animations"}
        </Button>
      </MotionQueue>
    </MotionContainer>
  );
}
```

### 5. Documentation & Examples

Motion Provider comes with comprehensive documentation to help you get the most out of its features. Explore the following resources:

- **Component API Reference**  
  Detailed information about each component and hook.

- **Tutorials & Guides**  
  Step-by-step guides for implementing complex animations.

- **Examples**  
  Check out real-world examples demonstrating various use cases:
  - **SaaS SPA App:** Learn motion state management and advanced image animations.
  - **Crypto Landing App:** Implement coloured and controlled animations.
  - **Agency Landing App:** Master text animations and synchronized effects.
  - **NFT Landing App:** Explore layout animations and dynamic motion queues.

<div align="center">
  <img src="assets/example-saas.gif" width="45%" alt="SaaS SPA App Example" style="margin: 10px;">
  <img src="assets/example-crypto.gif" width="45%" alt="Crypto Landing App Example" style="margin: 10px;">
</div>

## Contact

For support and inquiries:

Email: hello@burakdev.com
