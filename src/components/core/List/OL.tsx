import React, { Fragment, ReactNode, FC } from "react";

const OL: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <ol>{children}</ol>
    </Fragment>
  );
};

export default OL;
