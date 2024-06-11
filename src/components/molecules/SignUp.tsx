import React, { Fragment, FC, useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import Link from "next/link";
import clsx from "clsx";
import { TextField } from "@/components/form";

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
import { useIPInfo } from "@/hooks";
import { cloneDeep, unset } from "@/utils";

// TYPES
type TFormInputs = {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  agreeToTerms: boolean;
};

const http = new HttpService();

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  userName: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  agreeToTerms: Yup.bool().oneOf(
    [true],
    "You must agree to the terms and privacy policy"
  )
});

const SignUp: FC = () => {
  const ipInfo = useIPInfo();
  const router = useRouter();

  const [authModalType, setAuthModalType] = useRecoilState(authModalTypeAtom);
  const [authModalVisibility, setAuthModalVisibility] = useRecoilState(
    authModalVisibilityAtom
  );

  const [usernameAvailability, setUsernameAvailability] = useState(false);
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [showUsernameAvailable, setShowUsernameAvailable] = useState(false);

  const formRef = {
    emailRef: useRef<HTMLInputElement>(null),
    userNameRef: useRef<HTMLInputElement>(null),
    firstNameRef: useRef<HTMLInputElement>(null),
    lastNameRef: useRef<HTMLInputElement>(null),
    passwordRef: useRef<HTMLInputElement>(null)
  };

  const goToSignIn = () => {
    setAuthModalType("sign-in" as any);
  };

  const initialValues: TFormInputs = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    agreeToTerms: false
  };

  const signupAction = async (payload: TFormInputs) => {
    try {
      const response = await http
        .service()
        .push<THttpResponse<any>>(apiRoutes.USER_REGISTER, payload);

      const { isSuccessful, message, data } = response.data;

      if (isSuccessful) {
        alert(message);
        
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

  const checkUsernameAvailability = async (username: string) => {
    try {
      const response = await http
        .service()
        .pull<
          THttpResponse<{ isUsernameAvailable: boolean }>
        >(apiRoutes.CHECK_USERNAME_AVAILABILITY({ username }));

      const { data, isSuccessful, message } = response.data;

      if (isSuccessful) {
        console.log({ message, data });

        const { isUsernameAvailable } = data;
        setUsernameAvailability(isUsernameAvailable);
        setShowUsernameAvailable(true); // Show the message
        setTimeout(() => setShowUsernameAvailable(false), 500); // Hide the message after 500 milliseconds
      } else {
        setUsernameAvailability(false);
        setShowUsernameAvailable(false); // Ensure the message is hidden if there's an error
        http.cancelRequest();
      }
      setUsernameChecked(true);
    } catch (error: any) {
      setUsernameAvailability(false);
      setShowUsernameAvailable(false); // Ensure the message is hidden if there's an error
      console.error({ error });
      setUsernameChecked(true);
    }
  };

  const triggerCheckUsernameAvailability = async (e: any, _: any) => {
    const { value } = e.target;
    const valueLength = value ? value.length : 0;

    if (valueLength > 3) {
      await checkUsernameAvailability(value);
    } else {
      setUsernameChecked(false);
    }
  };

  const onSubmit = async (
    values: TFormInputs,
    actions: FormikHelpers<TFormInputs>
  ) => {
    const clonedValues = cloneDeep(values);
    unset(clonedValues, 'agreeToTerms');

    const payload = {
      ...clonedValues,
      ipAddress: ipInfo?.ipv4,
      location: ipInfo?.country
    };

    const result = await signupAction(payload);

    if (result) {
      actions.resetForm();

      setTimeout(() => {
        emitter.emit("closed");
        actions.setSubmitting(false);
        setAuthModalVisibility(!authModalVisibility);
      }, 1000);
    }
  };

  useEffect(() => {
    if (formRef.firstNameRef.current) {
      formRef.firstNameRef.current.focus();
    }
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 mb-10 animate__animated animate__fadeIn animate__fast">
        <div className="font-open-sans font-bold text-3xl text-bronze-400/90 tracking-tighter">
          Empower Your Trading Journey
        </div>
        <p className="text-[15px] font-open-sans text-bronze-content">
          Unlock access to tools & resources. No credit card needed.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur
      >
        {({ isSubmitting, handleBlur, setFieldError }) => (
          <Form className="w-full grid grid-cols-12 gap-8">
            <div className="col-span-12 xl:col-span-6">
              <Field
                type="text"
                name="firstName"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    type="text"
                    role="textbox"
                    label="YOUR FIRST NAME"
                    ref={formRef.firstNameRef}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12 xl:col-span-6">
              <Field
                type="text"
                name="lastName"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    type="text"
                    role="textbox"
                    label="YOUR LAST NAME"
                    ref={formRef.lastNameRef}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12 xl:col-span-6">
              <Field
                type="email"
                name="email"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    type="email"
                    role="textbox"
                    label="YOUR EMAIL ADDRESS"
                    ref={formRef.emailRef}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12 xl:col-span-6">
              <Field
                type="text"
                name="userName"
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    type="text"
                    role="textbox"
                    label="YOUR USERNAME"
                    ref={formRef.userNameRef}
                    onInput={(e) => {
                      triggerCheckUsernameAvailability(e, field);
                    }}
                    onBlur={(e) => {
                      handleBlur(e);
                      field.onBlur(e);
                    }}
                  />
                )}
              />
              <ErrorMessage
                name="userName"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
              {usernameChecked && (
                <p
                  className={clsx(
                    "text-field__success animate__animated animate__fadeIn animate__slow",
                    showUsernameAvailable ? "" : "hidden" // Hide the message if showUsernameAvailable is false
                  )}
                >
                  {showUsernameAvailable && ( // Display the message only when showUsernameAvailable is true
                    <span className="text-inherit">
                      Username is available{" "}
                      <i className="icon-user-check text-[15.5px]"></i>
                    </span>
                  )}
                </p>
              )}
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
                    label="Create a Strong Password"
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

            <div className="col-span-12">
              <Field name="agreeToTerms">
                {({ field }: any) => (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...field}
                      className="checkbox checkbox-xs checkbox-info border-bronze checked:checkbox-primary"
                    />
                    <span className="font-normal text-sm text-steel-black dark:text-white">
                      By signing up, you agree to our{" "}
                      <Link
                        href={routes.PRIVACY_POLICY}
                        className="text-bronze hover:text-primary-400 transition-all duration-500"
                      >
                        Privacy Policy
                      </Link>{" "}
                      &{" "}
                      <Link
                        href={routes.TERMS_OF_SERVICE}
                        className="text-bronze hover:text-primary-400 transition-all duration-500"
                      >
                        Terms.
                      </Link>
                    </span>
                  </label>
                )}
              </Field>
              <ErrorMessage
                name="agreeToTerms"
                component="p"
                className="text-field__error animate__animated animate__shakeX animate__slow"
              />
            </div>

            <div className="col-span-12 flex flex-col gap-y-3">
              <button
                type="submit"
                className={clsx(
                  "btn btn-block rounded-full uppercase bg-gradient-to-br from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-inner shadow-bronze-700/80 hover:from-primary-400 hover:via-primary-500 hover:to-primary-900 hover:shadow-primary hover:text-primary-content font-semibold tracking-[.01em] transition duration-[0.5s] border-none focus:outline-none",
                  isSubmitting && "pointer-events-none"
                )}
              >
                <span
                  className={clsx(
                    "loading loading-spinner loading-sm animate__animated animate__fadeIn",
                    isSubmitting ? "inline-block" : "hidden"
                  )}
                ></span>
                <span>
                  {isSubmitting
                    ? "Please wait..."
                    : "Start Now & Unlock Potential"}
                </span>
              </button>

              <div className="flex items-center space-x-2 text-[15px] font-medium font-open-sans text-center text-bronze-content">
                <span>Already a Member?</span>{" "}
                <span
                  onClick={goToSignIn}
                  className="text-bronze hover:text-primary-400 cursor-pointer transition-all duration-500"
                >
                  Sign In Here
                </span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignUp;
