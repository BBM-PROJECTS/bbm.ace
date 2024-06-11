import React, { FC } from "react";

import Image from 'next/image';

// CONSTANTS
import { emptyStateCopy } from "@/constants";

// HOOKS
import { useComputed } from "@/hooks";

// MIXINS
import { useMixins } from "@/providers";

type TEmptyStateProps = {
  type?: 1 | 2;
  copy?: string;
};

const EmptyState: FC<TEmptyStateProps> = ({
  type = 1,
  copy = emptyStateCopy
}) => {
  const mixins = useMixins();

  const getImageURL = useComputed<string>((): string => {
    switch (type) {
      case 1:
        return mixins.EMPTY_STATE;
      case 2:
        return mixins.EMPTY_STATE_TWO;

      default:
        return mixins.EMPTY_STATE;
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-3 w-full animate__animated animate__fadeIn animate__fast">
      <div className="relative min-h-40 lg:min-h-40 min-w-40 lg:min-w-60 overflow-hidden">
        <Image
          src={getImageURL}
          alt={type.toString()}
          draggable={false}
          fill
        />
      </div>

      <div className="text-xs lg:text-[15px] text-info-100/80">{copy}</div>
    </div>
  );
};

export default EmptyState;
