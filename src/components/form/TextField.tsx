import React, {
  forwardRef,
  Fragment,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useState
} from "react";
import clsx from "clsx";

export type TTextFieldProps = {
  label: string;
  obscure?: boolean;
  labelClassName?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TTextFieldProps>(
  (props, ref) => {
    const {
      label,
      inputClassName,
      labelClassName,
      className,
      obscure,
      name,
      type,
      value,
      onChange,
      ...rest
    } = props;
    const [inputValue, setInputValue] = useState(value || "");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      setInputValue(value || "");
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={clsx("text-field", className)}>
        <input
          ref={ref}
          id={name}
          name={name}
          value={inputValue}
          onChange={handleChange}
          type={showPassword ? "text" : type}
          className={clsx("text-field__input", inputClassName, {
            "text-field--filled": inputValue
          })}
          {...rest}
        />
        <label
          className={clsx("text-field__label", labelClassName)}
          htmlFor={name || ""}
          role="label"
        >
          {label}
        </label>

        {obscure && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="bg-gradient-to-br bg-clip-text text-transparent from-bronze-400 via-bronze-500 to-bronze-900 font-bold text-lg h-6 w-6 rounded-full grid place-items-center absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer z-20 transition-all duration-300"
          >
            <i className={showPassword ? "icon-eye" : "icon-eye-slash"}></i>
          </button>
        )}
      </div>
    );
  }
);

export default TextField;
