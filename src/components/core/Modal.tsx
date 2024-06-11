import React, {
  FC,
  ReactNode,
  Fragment,
  Dispatch,
  useEffect,
  SetStateAction
} from "react";
import clsx from "clsx";

// EVENTS
import { emitter } from "@/events";

// COMPONENTS
import {
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from "@headlessui/react";

import Portal from "./Portal";

export type TModalProps = {
  title?: string;
  name?: string;
  hasTitle?: boolean;
  visibility: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  setVisibility: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<TModalProps> = ({
  title,
  name,
  onOpen,
  onClose,
  children,
  visibility,
  setVisibility,
  hasTitle = true
}) => {
  const closeModal = () => {
    setVisibility(!visibility);

    setTimeout(() => {
      emitter.emit("closed");
    }, 1000);
  };

  // const firstRenderRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (onOpen) onOpen();

    return () => {
      if (onClose) onClose();
    };
  }, []);

  return (
    <Fragment>
      {typeof window !== "undefined" && visibility ? (
        <Portal.Passage>
          <Transition appear show={visibility}>
            {/* <FocusTrap> */}
            <Dialog
              as={"div"}
              onClose={closeModal}
              className={clsx("fixed inset-0 z-50 overflow-y-auto")}
            >
              <TransitionChild
                enter="animate__animated animate__fadeIn animate__faster"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="animate__animated animate__fadeOut animate__faster"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div className="fixed inset-0 bg-[#0d0307]/75" />
              </TransitionChild>

              <div role={name} className="fixed inset-0 overflow-y-auto">
                <div className="absolute top-4 right-4 z-50">
                  <div
                    className="tooltip tooltip-primary tooltip-left"
                    data-tip="Press 'ESC' to close the dialog"
                  >
                    <button
                      onClick={closeModal}
                      className="w-8 h-8 rounded-full font-semibold grid place-items-center text-primary-content bg-[#0d0307]/50 text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 animate-btn transition-all outline-none"
                    >
                      <i className="icon-x-mark text-[20px] text-[inherit]"></i>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col min-h-full min-w-full justify-center items-center">
                  <TransitionChild
                    as="div"
                    enter="animate__animated animate__zoomIn animate__fast"
                    enter-from="opacity-0 scale-0"
                    enter-to="opacity-100 scale-100"
                    leave="animate__animated animate__zoomOut animate__fast"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-0"
                    className="w-full max-w-2xl mx-auto"
                  >
                    <DialogPanel className="bg-gradient-to-br from-tertiary-900 via-[#19191a] to-tertiary-900 border border-[#1f1f20] rounded-[20px] p-6 flex flex-col gap-y-4 text-info-content/80">
                      {hasTitle ? (
                        <DialogTitle className="text-tertiary-content">
                          {title}
                        </DialogTitle>
                      ) : (
                        <Fragment></Fragment>
                      )}

                      {/* CHILDREN */}
                      {children ? children : <Fragment></Fragment>}
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
            {/* </FocusTrap> */}
          </Transition>
        </Portal.Passage>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Modal;
