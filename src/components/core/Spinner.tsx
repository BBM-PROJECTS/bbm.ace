import React, { FC } from "react";

import Image from 'next/image';

// CONSTANTS
import { loadingStateMsg } from "@/constants";

// MIXINS
import { useMixins } from "@/providers";

type TSpinnerProps = {
  copy?: string;
};

const Spinner: FC<TSpinnerProps> = ({ copy = loadingStateMsg }) => {
  const mixins = useMixins();

  return (
    <div className="flex flex-col items-center gap-y-4 w-full animate__animated animate__fadeIn animate__fast">
      <div className="relative h-28 w-28 lg:h-28 lg:w-28 rounded-full overflow-hidden">
        <Image
          src={mixins.SPINNER}
          alt={'Loading Image'}
          fill
          draggable={false}
          className="animate-spin"
        />
      </div>

      <div className="text-xs lg:text-[15px] text-info-100/80">{copy}</div>
    </div>
  );
};

export default Spinner;
