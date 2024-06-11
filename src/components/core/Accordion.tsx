import React, { Fragment, FC } from "react";

// HEADLESS UI
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";

// FRAMER MOTION
import { motion } from "framer-motion";

// NEXT IMG
import Image from "next/image";

// MIXINS
import { useMixins } from "@/providers";

// TYPES
import { TAccordionProps } from "@/types";

const Accordion: FC<TAccordionProps> = ({ question, answer }) => {
  const mixins = useMixins();

  return (
    <Fragment>
      <Disclosure
        as={"div"}
        className={
          "w-full p-6 rounded-lg text-bronze-content bg-tertiary-500/60 border border-tertiary-100/15"
        }
      >
        {({ open }) => (
          <Fragment>
            <DisclosureButton
              className={"flex justify-between items-center w-full"}
            >
              <span className="font-open-sans text-base lg:text-lg">
                {question}
              </span>

              {open ? (
                <a className="h-8 w-8 rounded-full grid text-3xl font-medium place-items-center bg-gradient-to-br bg-clip-text from-primary-400 via-primary-500 to-primary-800 text-transparent shadow-inner shadow-primary-700/80 animate-btn transition-colors cursor-pointer">
                  <i className="icon-x-circle"></i>
                </a>
              ) : (
                <a className="h-8 w-8 rounded-full grid text-3xl font-medium place-items-center bg-gradient-to-br bg-clip-text from-bronze-400 via-bronze-500 to-bronze-800 text-transparent shadow-inner shadow-bronze-700/80 animate-btn transition-colors cursor-pointer">
                  <i className="icon-plus-circle"></i>
                </a>
              )}
            </DisclosureButton>

            <DisclosurePanel
              as={motion.div}
              static
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={"overflow-hidden w-full"}
            >
              <div className="w-full h-1 relative mt-4 mb-6">
                <Image
                  fill
                  alt={"DIVIDER"}
                  src={mixins.DIVIDER}
                  className="object-contain"
                />
              </div>

              <div className="w-full text-base font-nunito-sans">{answer}</div>
            </DisclosurePanel>
          </Fragment>
        )}
      </Disclosure>
    </Fragment>
  );
};

export default Accordion;
