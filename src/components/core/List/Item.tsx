import React, { FC, Fragment } from "react";
import clsx from "clsx";

// UTILS
import { toLower } from "@/utils";

// TYPES
import { TUListProps } from "@/types";

const Item: FC<TUListProps> = ({
  children,
  theme,
  align = "start",
  type = "bullseye",
  iconName,
  className,
  iconClassName,
  contentClassName
}) => {
  const themeSelector = {
    "text-info": toLower(theme) === "info",
    "text-yellow": toLower(theme) === "yellow",
    "text-accent": toLower(theme) === "accent",
    "text-primary": toLower(theme) === "primary",
    "text-success": toLower(theme) === "success",
    "text-danger": toLower(theme) === "danger",
    "text-secondary": toLower(theme) === "secondary",
    "text-cornflower": toLower(theme) === "cornflower"
  };

  const iconSelector = {
    "icon-bullseye": toLower(type) === "bullseye",
    "icon-chart-line-up": toLower(type) === "line-up",
    "icon-chart-waterfall": toLower(type) === "waterfall"
  };

  return (
    <Fragment>
      <div
        className={clsx(
          "flex space-x-3 mb-[10px] last:mb-0 relative",
          align === 'center' ? 'items-center' : 'items-start',
          className
        )}
      >
        {type === "candlestick" ? (
          <div className={clsx("relative overflow-hidden h-7 w-7", themeSelector, iconClassName)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3.5V6.5"
                stroke="currentColor"
                stroke-opacity="0.24"
                stroke-linecap="round"
              />
              <path
                d="M7.5 14.5V18.5"
                stroke="currentColor"
                stroke-opacity="0.24"
                stroke-linecap="round"
              />
              <path
                d="M5 7.8C5 6.80589 5.80589 6 6.8 6H8.2C9.19411 6 10 6.80589 10 7.8V13.2C10 14.1941 9.19411 15 8.2 15H6.8C5.80589 15 5 14.1941 5 13.2V7.8Z"
                fill="currentColor"
              />
              <path
                d="M16.5 6.5V11.5"
                stroke="currentColor"
                stroke-opacity="0.24"
                stroke-linecap="round"
              />
              <path
                d="M16.5 16.5V20.5"
                stroke="currentColor"
                stroke-opacity="0.24"
                stroke-linecap="round"
              />
              <path
                d="M14 12.8C14 11.8059 14.8059 11 15.8 11H17.2C18.1941 11 19 11.8059 19 12.8V15.2C19 16.1941 18.1941 17 17.2 17H15.8C14.8059 17 14 16.1941 14 15.2V12.8Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : type === 'custom' ? (
          <i
          className={clsx(
            "pointer-events-none select-none",
            align === 'start' && 'py-[4.5px]',
            iconName,
            themeSelector,
            iconClassName
          )}
        ></i>
        ) : (
          <i
            className={clsx(
              "pointer-events-none select-none",
              align === 'start' && 'py-[4.5px]',
              iconSelector,
              themeSelector,
              iconClassName
            )}
          ></i>
        )}

        <li className={clsx(contentClassName)}>{children}</li>
      </div>
    </Fragment>
  );
};

export default Item;
