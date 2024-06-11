import React, { Fragment, FC } from "react";

// CLSX
import clsx from "clsx";

// TYPES
import { TListCardProps } from "@/types";

// COMPONENTS
import List from "./List";

const ListCard: FC<TListCardProps> = ({
  key,
  theme,
  items,
  heading,
  subheading
}) => {
  const themeStyles = {
    "text-bronze-content": theme === undefined,
    "text-gold": theme === "yellow"
  };

  return (
    <Fragment>
      <div
      key={key}
        className={clsx(
          "w-full h-full flex flex-col gap-y-6 rounded-lg bg-tertiary-500/60 border border-tertiary-100/15 p-6 lg:py-8",
          themeStyles
        )}
      >
        <div className="w-full flex items-center justify-between">
          <h6 className="font-squada-one text-3xl">{heading}</h6>

          <i className="icon-check-badge text-4xl"></i>
        </div>

        <p className="text-bronze-content text-sm font-nunito-sans">
          {subheading}
        </p>

        <List.UL>
          {items.map(({ copy, icon, iconName }, index) => (
            <Fragment>
              <List.Item
                key={index}
                type={icon}
                iconName={iconName}
                className="mb-[6px] mt-2 first:mt-0 rounded-full"
                iconClassName={clsx("text-[17px]", themeStyles)}
              >
                <span className="text-bronze-content text-xs font-nunito-sans">
                  {copy}
                </span>
              </List.Item>
              <div className="w-full h-[1.5px] bg-gradient-to-r from-tertiary-500/15 via-tertiary-100/10 to-tertiary-500/15 last:hidden"></div>
            </Fragment>
          ))}
        </List.UL>
      </div>
    </Fragment>
  );
};

export default ListCard;
