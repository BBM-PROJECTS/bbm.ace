import React, { createContext, ReactNode, useContext } from "react";
import { staticImg } from "@/mixins";

const mixins = {
  ...staticImg
};

const MixinsContext = createContext(mixins);

export const MixinsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MixinsContext.Provider value={mixins}>{children}</MixinsContext.Provider>
  );
};

export const useMixins = () => useContext(MixinsContext);
