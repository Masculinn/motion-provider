import { FC } from "react";
import { OverviewCardProps } from "../interfaces";
import { Card as CardContainer } from "./ui/card";
import Link from "next/link";

export const Card: FC<OverviewCardProps> = (props) => {
  const { desc, title, link } = props;

  return (
    <CardContainer className="h-42 w-auto text-white cursor-pointer hover:bg-stone-900 border-none transition-all duration-300  bg-stone-900/20  group backdrop-blur-md">
      <Link
        target="_blank"
        href={link}
        className=" flex flex-row lg:gap-6 gap-2 justify-center items-center lg:px-8 px-4 w-full h-full "
      >
        <div className="lg:w-16 lg:h-16 w-5 h-5 flex items-center justify-center text-stone-300 group-hover:text-white">
          {<props.icon className="size-7" />}
        </div>
        <div className="lg:w-full w-auto h-full items-start justify-center flex flex-col truncate overflow-clip">
          <h2 className="font-bold text-sm font-secondary">{title}</h2>
          <p className="tracking-tighter text-xs text-stone-400 lg:block hidden">
            {desc}
          </p>
        </div>
      </Link>
    </CardContainer>
  );
};
