import React, { FC, ReactNode, SelectHTMLAttributes } from "react";
import clsx from "clsx";

export type TSelectFieldProps = {
  label: string;
  children?: ReactNode;
  labelClassName?: string;
  selectClassName?: string;
};

const SelectField: FC<
  TSelectFieldProps & SelectHTMLAttributes<HTMLSelectElement>
> = (props) => {
  const { label, selectClassName, labelClassName, className, name, children } = props;

  return (
    <div className={clsx("select-field", className)}>
      <select className={clsx("select-field", selectClassName)} {...props} id="select-field">
        {children}
      </select>

      <label
        className={clsx("select-field__label", labelClassName)}
        htmlFor={name || ""}
        role="label"
      >
        {label}
      </label>

      <div className="flex pointer-events-none absolute right-3 xl:right-4 top-[50%] translate-y-[-50%]">
        <i className="icon-caret-down text-[18px] text-inherit 2xl:text-[20px] pointer-events-none"></i>
      </div>
    </div>
  );
};

export default SelectField;
