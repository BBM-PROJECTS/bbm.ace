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

// STORE
import { RecoilRoot } from "recoil";

// NEXT PROGRESSBAR
import NProgress from "nextjs-progressbar";

// REACT
import { Fragment } from "react";

// PROVIDERS
import { MixinsProvider } from "@/providers";
// import { AppLayout } from "@/layouts";

// UTILS
import { toString } from "@/utils";

// EVENTS
import { emitter } from "@/events";

// SERVICES
import { StorageService } from "@/services";

// NEXT
import type { AppProps } from "next/app";

const storage = new StorageService();

const App = ({ Component, pageProps }: AppProps) => {
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

  return (
    <Fragment>
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
        color="linear-gradient(90deg, rgba(101, 110, 244,1) 0%, rgba(225, 48, 108,1) 50%, rgba(245, 158, 11,1) 100%)"
      />
    </Fragment>
  );
};

export default App;
