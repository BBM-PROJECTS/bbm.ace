import React, { Fragment, useState } from "react";

// CUSTOM HOOKS
import { useComputed } from "@/hooks";

// IMAGE
import Image from "next/image";

// LINK
import Link from "next/link";

// CONSTANTS
import { contacts } from "@/constants";


// HELPERS
import { formatPhoneNumber } from "@/helpers";
import { useMixins } from "@/providers";


const Footer = () => {
  const [date] = useState(new Date());

  const mixins = useMixins();

  const getCurrentYear = useComputed<number>(() => {
    return date.getFullYear();
  }, [date]);

  return (
    <Fragment>
      <footer className="w-full grid place-items-center bg-tertiary/20 relative">
        <div className="footer grid grid-cols-12 overflow-hidden relative z-10">
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-4">
            <div className="relative overflow-hidden h-14 w-40 2xl:h-16 2xl:w-44">
              <Image
                fill
                priority={true}
                draggable={false}
                src={mixins.BBM_LOGO_HORIZONTAL}
                alt={"BBM Horintal Logo Variant"}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-info-content/90 text-sm leading-6">
              BullBear Mastery Ace helps traders of all levels learn how to trade
              the financial markets.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-6">
            <h5 className="font-squada-one text-info-content/90 font-medium !tracking-[.01em] text-[20px] lg:text-[22px]">
              Inside BullBear Mastery Ace
            </h5>

            <ul className="flex flex-col gap-y-4">
              <li>
                <Link
                  href={"/"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight"
                >
                  About BullBear Mastery Ace
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-6">
            <h5 className="font-squada-one text-info-content/90 font-medium !tracking-[.01em] text-[20px] lg:text-[22px]">
              Support
            </h5>

            <ul className="flex flex-col gap-y-4">
              <li>
                <Link
                  href={"/"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight flex items-center gap-x-2"
                >
                  <Image
                    width={18}
                    height={18}
                    priority={true}
                    alt={"Whatsapp Icon"}
                    src={mixins.WHATSAPP_ICON}
                  />
                  <span>{formatPhoneNumber(contacts.mtn)}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight flex items-center gap-x-2"
                >
                  <Image
                    width={18}
                    height={18}
                    priority={true}
                    alt={"Whatsapp Icon"}
                    src={mixins.WHATSAPP_ICON}
                  />
                  <span>{formatPhoneNumber(contacts.airtel)}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight flex items-center gap-x-2"
                >
                  <i className="icon-email text-info-content/90 text-[16px]"></i>
                  <span>support@bullbearmastery.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/help-center"}
                  className="text-info-50/90 hover:text-info-200/90 focus:text-info-200/80 active:text-info-400/90 text-sm font-medium tracking-tight flex items-center gap-x-2"
                >
                  <i className="icon-help-center text-info-content/90 text-[16px]"></i>
                  <span>Visit Help Center</span>
                </Link>
              </li>
            </ul>

            <div
              role="Social Media Links"
              className="flex items-center gap-x-2 justify-between"
            >
              <Link
                href={"/"}
                target={"_blank"}
                role="Facebook Page Link"
                aria-roledescription="Facebook Page Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="Facebook Icon"
                  className="icon-facebook text-[18px] font-medium"
                ></i>
              </Link>

              <Link
                href={"/"}
                target={"_blank"}
                role="Instagram Page Link"
                aria-roledescription="Instagram Page Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="Instagram Icon"
                  className="icon-instagram text-[18px] font-medium"
                ></i>
              </Link>

              <Link
                href={"/"}
                target={"_blank"}
                role="TikTok Page Link"
                aria-roledescription="Tiktok Page Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="TikTok Icon"
                  className="icon-tiktok text-[20px] font-medium"
                ></i>
              </Link>

              <Link
                href={"/"}
                target={"_blank"}
                role="LinkedIn Page Link"
                aria-roledescription="LinkedIn Page Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="LinkedIn Icon"
                  className="icon-linked-in text-[18px] font-medium"
                ></i>
              </Link>

              <Link
                href={"/"}
                target={"_blank"}
                role="Telegram Channel Link"
                aria-roledescription="Telegram Channel Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="Telegram Icon"
                  className="icon-telegram text-[18px] font-medium"
                ></i>
              </Link>

              <Link
                href={"/"}
                target={"_blank"}
                role="Dicord Group Link"
                aria-roledescription="Telegram Channel Link"
                className="btn btn-sm btn-circle p-1 h-8 w-8 rounded-full grid place-items-center text-info-600 bg-info-50/90 hover:bg-info hover:text-info-50/90 focus:bg-info/80 focus:text-info-50/90 focus:outline-none border-none transition-all relative overflow-hidden"
              >
                <i
                  role="icon"
                  aria-roledescription="Discord Icon"
                  className="icon-discord text-[18px] font-semibold"
                ></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full grid place-items-center bg-tertiary-500/15 relative z-10">
          <div className="footer flex flex-col items-center">
            <p className="text-info-content/90 flex items-center text-sm">
              BullBear Mastery Ace (BBM Team) | &copy; {getCurrentYear}
            </p>
          </div>
        </div>

        <div className="footer relative z-10">
          <div className="flex flex-col gap-y-4 w-full text-info-content/90 text-xs lg:text-sm">
            <p>
              Risk Disclaimer: Trading financial markets carries inherent risk.
              The information provided on [invalid URL removed] and within the
              BBM Trading Academy platform is intended for educational purposes
              only and should not be construed as financial advice. Before
              trading, carefully consider your investment objectives, experience
              level, and risk tolerance. Only trade with capital you can afford
              to lose. Past performance is not indicative of future results.
            </p>

            <p>
              BBM Team takes no responsibility for any losses incurred as a
              result of the content provided. By enrolling in the BBM Trading
              Academy, you acknowledge that we are not providing financial
              advice and that you are solely responsible for your trading
              decisions.
            </p>

            <p>
              This website uses cookies to enhance user experience. By using our
              website with cookies enabled or by accepting our Cookie Policy
              notification, you consent to our Privacy Policy, which includes
              details on our Cookie Policy.
            </p>

            <p>
              This site is protected by reCAPTCHA. Google's{" "}
              <Link
                href={"/privacy"}
                target={"_blank"}
                className="underline font-medium"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href={"/terms"}
                target={"_blank"}
                className="underline font-medium"
              >
                Terms of Service
              </Link>{" "}
              apply.
            </p>
          </div>
        </div>

        <div className="w-full grid place-items-center bg-tertiary-500/15 relative z-10">
          <div className="py-4 px-5 flex flex-col items-center">
            <p className="text-info-content/90 flex items-center text-sm">
              Bulls Make Money, Bears Take Money, Pigs Get Slaughtered
            </p>
          </div>
        </div>

        <div className="absolute z-0 h-full w-full border top-[-20%] left-[-20%] tra bg-cover-left filter blur-3xl bg-no-repeat"></div>
        
      </footer>
    </Fragment>
  );
};

export default Footer;
