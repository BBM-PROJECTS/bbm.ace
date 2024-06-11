import React, { Fragment, FC } from "react";

// NEXT IMAGE
import Image from "next/image";

// TYPES
import { TInfoCardProps } from "@/types";

const InfoCard: FC<TInfoCardProps> = ({ src, heading, subheading }) => {
  return (
    <Fragment>
      <div className="w-full flex flex-col gap-y-6 items-center p-6 lg:py-8 lg:px-4 rounded-lg bg-tertiary-500/60 border border-tertiary-100/15">
        <div className="h-16 w-16 lg:h-20 lg:w-20 relative p-1 overflow-hidden">
          <Image
            fill
            priority
            src={src}
            alt={heading}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-y-2 text-bronze-content">
          <h6 className="font-semibold text-lg font-open-sans">{heading}</h6>

          <p className="font-medium text-sm text-center">{subheading}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoCard;
