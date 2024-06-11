import React, { Fragment, FC, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import clsx from "clsx";
import { TextField } from "@/components/form";

// HOST TOAST
import { toast } from "react-hot-toast";

// STORE
import { authModalTypeAtom, authModalVisibilityAtom } from "@/store";

// ROUTES
import { routes, apiRoutes } from "@/routes";

// EVENTS
import { emitter } from "@/events";

// SERVICE
import { HttpService, THttpResponse } from "@/services";

// ROUTER
import { useRouter } from "next/router";

// TYPES
type TFormInputs = {
  password: string;
  emailOrUsername: string;
};

const http = new HttpService();

const validationSchema = Yup.object().shape({
  emailOrUsername: Yup.string()
    .min(3, "Your entry needs at least 4 characters.")
    .required("Email or Username is required")
    .test(
      "is-email-or-username",
      "Must be a valid email or username (min 4 characters)",
      (value) => {
        if (!value) return false;
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isValidUsername = /^[a-zA-Z0-9_]{4,}$/.test(value);
        return isValidEmail || isValidUsername;
      }
    ),
  password: Yup.string().required("Password is required")
});

const SignIn: FC = ({}) => {
  const router = useRouter();

  const [authModalType, setAuthModalType] = useRecoilState(authModalTypeAtom);
  const [authModalVisibility, setAuthModalVisibility] = useRecoilState(
    authModalVisibilityAtom
  );


  const formRef = {
    passwordRef: useRef<HTMLInputElement>(null),
    emailOrUsernameRef: useRef<HTMLInputElement>(null)
  };

  const goToSignUp = () => {
    setAuthModalType("sign-up" as any);
  };

  const goToNeedHelp = () => {
    setAuthModalType("need-help" as any);
  };

  const initialValues: TFormInputs = {
    emailOrUsername: "",
    password: ""
  };

  const signinAction = async (payload: TFormInputs) => {
    try {
      const response = await http
        .service()
        .push<THttpResponse<any>>(apiRoutes.TOKEN_MANAGER, payload);

      const { isSuccessful, message, data } = response.data;

      if (isSuccessful) {
        toast.success(message);
        console.log({ data });

        return true;
      } else {
        http.cancelRequest();

        return false;
      }
    } catch (error: any) {
      console.error({ error });

      http.cancelRequest();
      return false;
    }
  };

  const onSubmit = async (
    values: TFormInputs,
    actions: FormikHelpers<TFormInputs>
  ) => {
    const result = await signinAction(values);

    if (result) {
      actions.resetForm();

      setTimeout(() => {
        emitter.emit("closed");
        actions.setSubmitting(false);
        setAuthModalVisibility(!authModalVisibility);

        router.replace(routes.DASHBOARD);
      }, 1000);
    }
  };

  useEffect(() => {
    if (formRef.emailOrUsernameRef.current) {
      formRef.emailOrUsernameRef.current.focus();
    }
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 mb-10 animate__animated animate__fadeIn animate__fast">
        <div className="font-open-sans font-bold text-3xl text-bronze-400/90 tracking-tighter">
          Welcome Back!
        </div>
        <p className="text-[15px] font-open-sans text-bronze-content">
          Sign in to unlock your trading tools and resources.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur
      >
        {({ isSubmitting, handleBlur }) => (
          <Form className="w-full grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <Field
                type="text"
                name="emailOrUsername"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    type="text"
                    role="textbox"
                    label="YOUR EMAIL OR USERNAME"
                    ref={formRef.emailOrUsernameRef}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="emailOrUsername"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12">
              <Field
                type="password"
                name="password"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    obscure={true}
                    type="password"
                    role="textbox"
                    label="YOUR PASSWORD"
                    ref={formRef.passwordRef}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12 flex flex-col gap-y-4">
              <button
                type="submit"
                className={clsx(
                  "btn rounded-full uppercase btn-block bg-gradient-to-br from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-inner shadow-bronze-700/80 hover:from-primary-400 hover:via-primary-500 hover:to-primary-900 hover:shadow-primary hover:text-primary-content border-none focus:outline-none font-semibold tracking-[.01em] transition duration-[0.5s]",
                  isSubmitting && "pointer-events-none"
                )}
              >
                <span
                  className={clsx(
                    "loading loading-spinner loading-sm animate__animated animate__fadeIn",
                    isSubmitting ? "inline-block" : "hidden"
                  )}
                ></span>
                <span>{isSubmitting ? "Please wait..." : "Sign In Now!"}</span>
              </button>

              <div className="flex flex-col gap-y-2 items-start">
                <button
                  onClick={goToNeedHelp}
                  type="button"
                  className="rounded-full inline-block text-bronze hover:text-primary font-open-sans font-medium transition-all duration-500 "
                >
                  Need Help Signing In?
                </button>

                <div className="flex items-center space-x-2 text-[15px] font-medium font-open-sans text-center text-bronze-content">
                  <span>No Account Yet?</span>{" "}
                  <span
                    onClick={goToSignUp}
                    className="text-bronze hover:text-primary-400 cursor-pointer transition-all duration-500"
                  >
                    Sign Up for Free!
                  </span>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignIn;
