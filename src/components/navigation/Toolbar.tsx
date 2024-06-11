import React, { Fragment, FC } from "react";

// CLSX
import clsx from "clsx";

// PROVIDERS
import { useMixins } from "@/providers";

// NEXT LINK
import Link from "next/link";

// NEXT IMAGE
import Image from "next/image";

// EVENTS
import { emitter } from "@/events";

// STORE
import { useRecoilState } from "recoil";
import { authModalTypeAtom, authModalVisibilityAtom } from "@/store";

const Toolbar: FC = () => {
  const mixins = useMixins();

  const [authModalType, setAuthModalType] = useRecoilState(authModalTypeAtom);
  const [authModalVisibility, setAuthModalVisibility] = useRecoilState(
    authModalVisibilityAtom
  );

  const openAuthModal = (authModalType: undefined | "sign-in" | "sign-up") => {
    setAuthModalType(authModalType as any);
    setAuthModalVisibility(true);

    setTimeout(() => {
      emitter.emit("opened");
    }, 100);
  };

  return (
    <Fragment>
      <nav
        id="toolbar"
        className="toolbar grid place-items-center w-full bg-inherit py-5 shadow-md border-b-[0.7px] border-b-tertiary-100/15"
      >
        <div className="toolbar__content flex items-center justify-between w-[calc(100%-40px)] lg:w-[80%]">
          <div className="flex items-center gap-x-2">
            <div className="toolbar__media relative h-14 w-36 overflow-hidden">
              <Image
                fill
                alt={"BRAND LOGO"}
                src={mixins.BBM_LOGO_HORIZONTAL}
                className="w-full h-full object-contain sepia-monochrome"
              />
            </div>

            <h6 className="text-bronze-100 text-[34px] font-squada-one tracking-wide uppercase">
              Ace
            </h6>
          </div>

          <div className="toolbar__actions flex items-center gap-4">
            <button
              onClick={() => openAuthModal("sign-in")}
              type="button"
              className="btn btn-ghost rounded-full uppercase font-open-sans text-bronze-content hover:bg-tertiary-500/50 px-5 2xl:px-6 tracking-wide"
            >
              <span>Sign In</span>
            </button>

            <button
              onClick={() => openAuthModal("sign-up")}
              type="button"
              className={clsx(
                "btn bg-gradient-to-br font-open-sans font-semibold tracking-wide border-none focus:outline-none rounded-full uppercase px-8 from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-bronze-700/80 hover:from-primary-400 hover:via-primary-500 hover:to-primary-800 hover:text-primary-content hover:shadow-primary-700/80 transition-colors"
              )}
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Toolbar;
