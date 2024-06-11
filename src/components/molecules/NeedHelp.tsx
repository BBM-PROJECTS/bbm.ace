import React, { Fragment } from "react";

// RECOIL
import { useRecoilState } from "recoil";

// STORE
import { authModalTypeAtom } from "@/store";

// NEXT
import Link from "next/link";

// COMPONENTS
import { TextField } from "@/components/form";

// ROUTES
import { routes } from "@/routes";

const NeedHelp = ({}) => {
  const [authModalType, setAuthModalType] = useRecoilState(authModalTypeAtom);

  const goToSignUp = () => {
    setAuthModalType("sign-up" as any);
  };

  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 mb-10 animate__animated animate__fadeIn">
        <div className="font-open-sans font-bold text-3xl text-info-200/90 tracking-tighter">
          Recover Your BullBear Account
        </div>
        <p className="text-[15px] font-open-sans">
          Enter your email address to reset your password or get further
          assistance.
        </p>
      </div>

      <form className="w-full grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <TextField
            label="YOUR EMAIL ADDRESS"
            type={"email"}
            name="email"
            role="textbox"
            required
          />
        </div>

        <div className="col-span-12 flex flex-col gap-y-4">
          <button
            type="submit"
            className="btn btn-info rounded-full uppercase btn-block hover:bg-primary hover:text-primary-400-content hover:border-primary focus:bg-primary-700 font-semibold tracking-[.01em] transition duration-[0.5s]"
          >
            Send Recovery Instructions
          </button>

          <div className="flex flex-col gap-y-2 items-start">
            <button className="rounded-full inline-block text-info font-open-sans font-medium transition-all duration-500">
              Didn't receive an email? Check your spam folder or try again
              later.
            </button>

            <div className="flex items-center space-x-2 text-[15px] font-medium font-open-sans text-center">
              <span>New User?</span>{" "}
              <span
                onClick={goToSignUp}
                className="text-info hover:text-primary-400 cursor-pointer transition-all duration-500"
              >
                Sign Up for Free!
              </span>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default NeedHelp;
