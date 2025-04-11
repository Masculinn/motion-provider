import { FC } from "react";
import { cn } from "@/lib/utils";
import cardsLib from "@/lib/root/cards.lib";
import { Card } from "@/components/card";
import { FullScreenModal } from "@/components/fullscreen-permission";
import { StickyFooter } from "@/components/sticky-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReduxCookieProps, SectionProps } from "@/interfaces";
import { useAnimation } from "@/motion/hooks/use-animation";
import { useAnimationControl } from "@/motion/hooks/use-animation-control";
import MotionChain from "@/motion/motion-chain";
import { MotionAnimationProps } from "@/motion/types";
import dynamic from "next/dynamic";
import { Play } from "lucide-react";
import MotionText from "@/motion/motion-text";
import { useMobile } from "@/hooks/useMobile";
import { useSelector } from "react-redux";

const Modal = dynamic(() => Promise.resolve(FullScreenModal), { ssr: false });

const cardAnimations = cardsLib.map((_) => ({
  mode: ["filterBlurIn", "fadeUp"],
  duration: 0.5,
  delay: 0,
  transition: "smooth",
})) as MotionAnimationProps[];

const HomeHero: FC<SectionProps> = ({ className }) => {
  const cookie = useSelector((state: ReduxCookieProps) => state.activated);

  const { control, onReverse } = useAnimationControl();
  const controller = useAnimation(control);
  const isMobile = useMobile();

  return (
    <>
      {!isMobile && !cookie && <Modal />}
      <Button className="absolute top-24 right-24 " onClick={onReverse}>
        <Play />
      </Button>
      <section
        className={cn(
          "max-w-5xl mx-auto h-screen relative overflow-hidden",
          className
        )}
      >
        <div className="h-2/3 w-full justify-center flex items-center flex-col  -mt-12">
          <Badge variant="outline" className="dark mb-4">
            New Release V2.0 🚀
          </Badge>
          <MotionText
            elementType="h1"
            animation={{
              mode: ["fadeUp", "filterBlurIn", "flash", "bounceY"],
              transition: "smooth",
              duration: 2,
            }}
            config={{
              duration: 0.18,
              mode: "chars",
              delayLogic: "bounce",
            }}
            className="lg:text-7xl text-4xl tracking-tighter font-extralight px-1 text-transparent bg-clip-text bg-linear-to-b from-white to-transparent"
            controller={controller}
          >
            Motion Provider.
          </MotionText>
        </div>
        <div className="h-auto lg:w-full grid grid-cols-2 lg:gap-4 gap-2 lg:-mt-32 -mt-42">
          <MotionChain
            config={{
              duration: 0.5,
              delayLogic: "linear",
            }}
            elementType={"div"}
            animations={cardAnimations}
            controller={controller}
          >
            {cardsLib.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </MotionChain>
        </div>
        <StickyFooter className="bottom-4 left-1/2 -translate-x-1/2 absolute w-auto" />
      </section>
    </>
  );
};

export default HomeHero;
