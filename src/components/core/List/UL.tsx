import React, { Fragment, ReactNode, FC } from "react";

const UL: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <ul>{children}</ul>
    </Fragment>
  );
};

export default UL;
