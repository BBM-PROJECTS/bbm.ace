// GLOBAL STYLES
import "@/styles/globals.scss";
import "/public/font-icons/icons.css";
import "animate.css";

// FONTS
import "@fontsource/squada-one";

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/400-italic.css";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/400-italic.css";

import clsx from "clsx";

// STORE
import { RecoilRoot } from "recoil";

// NEXT PROGRESSBAR
import NProgress from "nextjs-progressbar";

// REACT
import { Fragment } from "react";

// PROVIDERS
import { MixinsProvider } from "@/providers";

// HOT TOAST
import { resolveValue, Toaster } from "react-hot-toast";

// UTILS
import { toString } from "@/utils";

// EVENTS
import { emitter } from "@/events";

// SERVICES
import { StorageService, LookupService } from "@/services";

// NEXT
import type { AppProps } from "next/app";

// HOOKS
import { useIPInfo } from "@/hooks";

const lookup = new LookupService();
const storage = new StorageService();

const App = ({ Component, pageProps }: AppProps) => {
  const ipInfo = useIPInfo();

  emitter.on("opened", () => {
    setTimeout(() => {
      storage.setItem("AUTH_MODAL_STATUS", toString(true));
    }, 1000);
  });

  emitter.on("closed", () => {
    setTimeout(() => {
      storage.clearItem("AUTH_MODAL_STATUS");
    }, 1000);
  });

  console.log({ ipInfo });

  return (
    <Fragment>
      <Toaster position="top-right" toastOptions={{ duration: 6000 }}>
        {(t) => {
          return (
            <div
              className={clsx(
                "shadow-lg text-[15px] bg-gradient-to-br from-tertiary-900 via-[#151105]/95 to-tertiary-900 text-gold border border-tertiary-300/50 outline-none font-open-sans rounded-lg md:min-w-[400px] max-w-[400px] p-5 flex flex-col",
                {
                  "from-tertiary-900 via-[#16050b]/95 to-tertiary-900 text-primary":
                    resolveValue(t.type, t) === "error",
                  "from-tertiary-900 via-[#111900]/95 to-tertiary-900 text-lemon-600":
                    resolveValue(t.type, t) === "success",
                  "from-tertiary-900 via-[#140d05]/95 to-tertiary-900 text-bronze":
                    resolveValue(t.type, t) === "loading"
                }
              )}
            >
              <>
                <div className="flex items-start space-x-2 w-full">
                  <div className="h-7 w-7 rounded-full grid place-items-center">
                    <i
                      className={clsx(
                        "text-[22px] font-bold",
                        resolveValue(t.type, t) === "error" && "icon-x-circle",
                        resolveValue(t.type, t) === "success" &&
                          "icon-check-badge",
                        resolveValue(t.type, t) === "loading"
                          ? "loading loading-spinner loading-sm"
                          : "icon-info-circle"
                      )}
                    ></i>
                  </div>

                  <p className="font-medium text-[15px]">
                    {resolveValue(t.message, t)}
                  </p>
                </div>
              </>
            </div>
          );
        }}
      </Toaster>

      <RecoilRoot>
        <MixinsProvider>
          <Component {...pageProps} />
        </MixinsProvider>
      </RecoilRoot>

      <NProgress
        height={4}
        stopDelayMs={200}
        startPosition={0.3}
        showOnShallow={true}
        options={{
          showSpinner: true
        }}
        color="linear-gradient(90deg, rgba(101, 110, 244,1) 0%, rgba(225, 48, 108,1) 50%, rgba(245, 158, 11,1) 100%)"
      />
    </Fragment>
  );
};

export default App;
