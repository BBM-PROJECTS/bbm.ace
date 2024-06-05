import React, { Fragment, FC } from "react";

// CLSX
import clsx from "clsx";

// PROVIDERS
import { useMixins } from "@/providers";

// NEXT LINK
import Link from "next/link";

// NEXT IMAGE
import Image from "next/image";

const Toolbar: FC = () => {
  const staticImg = useMixins();

  return (
    <Fragment>
      <nav
        id="toolbar"
        className="toolbar grid place-items-center w-full bg-inherit py-5 shadow-md border-b-[0.7px] border-tertiary-200/50"
      >
        <div className="toolbar__content flex items-center justify-between w-[calc(100%-40px)] lg:w-[80%]">
          <div className="flex items-center gap-x-4">
            <div className="toolbar__media relative h-14 w-14 2xl:h-16 2xl:w-16 overflow-hidden">
              <Image
                fill
                src={staticImg.BBM_LOGO_HR_BW}
                alt={"BRAND LOGO"}
                className="w-full h-full object-contain"
              />
            </div>

            <h6 className="text-bronze-50 text-4xl font-squada-one tracking-wide">
              BullBear Mastery <span className="uppercase">Ace</span>
            </h6>
          </div>

          <div className="toolbar__actions">
            <button
              type="button"
              className={clsx(
                "btn bg-gradient-to-br font-open-sans font-semibold tracking-wide border-none focus:outline-none rounded-full uppercase px-8 from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-inner shadow-bronze-700/80"
              )}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Toolbar;
