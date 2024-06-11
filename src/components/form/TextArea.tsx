import React, { FC, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

export type TTextAreaProps = {
  label: string;
  labelClassName?: string;
  textareaClassName?: string;
}

const TextArea: FC<TTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const { label, textareaClassName, labelClassName, className, name } = props;

  return (
    <div className={clsx("text-area", className)}>
      <textarea className={clsx("text-area__textarea", textareaClassName)} {...props}></textarea>
      
      <label
        className={clsx("text-area__label", labelClassName)}
        htmlFor={name || ""}
        role="label"
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
