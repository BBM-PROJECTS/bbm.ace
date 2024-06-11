import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

let portalRoot: HTMLElement | undefined;

if (typeof window !== "undefined") {
  portalRoot =
    document.getElementById("modal-root") || document.createElement("div");
  portalRoot.id = "modal-root";

  document.body.appendChild(portalRoot);
}

const Vortex: FC<{ children: ReactNode }> = ({ children }) => {
  return portalRoot ? createPortal(children, portalRoot) : children;
};

export default Vortex;
