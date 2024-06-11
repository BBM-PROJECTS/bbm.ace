import React, { Fragment } from "react";

// NEXT IMAGE
import Image from "next/image";

// PROVIDERS
import { useMixins } from "@/providers";

// RECOIL
import { useRecoilState } from "recoil";
import { authModalTypeAtom, authModalVisibilityAtom } from "@/store";

// FORMS
import { TextField } from "@/components/form";

// NAVIGATION
import { Toolbar, Footer } from "@/components/navigation";

// CORE
import { Accordion, InfoCard, List, ListCard, Modal } from "@/components/core";

// CONSTANTS
import { infoList, pointList } from "@/constants";

// SERVICES
import { StorageService } from "@/services";

// ROUTER
import { useRouter } from "next/router";

// UTILS
import { isEmpty } from "@/utils";
import { NeedHelp, SignIn, SignUp } from "@/components/molecules";

const Home = () => {
  const router = useRouter();
  const mixins = useMixins();

  const storage = new StorageService();
  const [authModalType, setAuthModalType] = useRecoilState(authModalTypeAtom);
  const [authModalVisibility, setAuthModalVisibility] = useRecoilState(
    authModalVisibilityAtom
  );

  const authModalStatus = () => {
    const jsonPayload = storage.getItem("AUTH_MODAL_STATUS");

    if (isEmpty(jsonPayload)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Fragment>
      <Toolbar />

      <header className="flex flex-col items-center min-h-[70vh] w-full relative">
        <div className="container grid grid-cols-12">
          <div className="col-span-12 flex flex-col items-start gap-y-6 lg:gap-y-8 lg:col-span-8 relative">
            <h6 className="text-bronze-content font-squada-one text-5xl lg:text-[68px] leading-[1]">
              Take your <span className="text-info-400">Funded Account</span> to
              the <span className="text-primary-400">Next Level</span>
            </h6>

            <Image
              priority
              width={25}
              height={25}
              src={mixins.LOUD}
              alt={"Loud Illustration"}
              className="absolute left-[62%] top-[33%] translate-x-[-62%] translate-y-[-33px]"
            />

            <Image
              priority
              width={90}
              height={90}
              src={mixins.POINTER}
              alt={"Pointer Illustration"}
              className="absolute left-[100%] top-[24%] translate-x-[-100%] translate-y-[-24px]"
            />

            <p className="font-nunito-sans text-xl text-bronze-content">
              We're a skilled bunch of forex traders ready to help you breeze
              through those funded account challenges. Trust us with your
              account, and we'll stick with you every step of the way until you
              cash out with confidence!
            </p>

            <button onClick={() => router.push("/dashboard")} className="btn bg-gradient-to-br from-info-400 via-info-500 to-info-900 shadow-inner shadow-info text-info-content hover:from-primary-400 hover:via-primary-500 hover:to-primary-900 hover:shadow-primary rounded-full uppercase px-8 py-4 h-auto font-open-sans font-semibold border-none focus:outline-none text-base transition-colors">
              Let's do this
            </button>

            <div className="flex flex-col gap-y-4">
              <h6 className="text-bronze-content font-open-sans font-semibold text-xl lg:text-2xl">
                Join Our Communities
              </h6>

              <div className="flex items-center gap-4">
                <button
                  type={"button"}
                  className="h-10 w-10 rounded-full bg-[#5865f2] hover:bg-[#4651c2] grid place-items-center text-[#eef0fe] text-[22px] transition-colors animate-btn"
                >
                  <i className="icon-discord text-inherit"></i>
                </button>

                <button
                  type={"button"}
                  className="h-10 w-10 rounded-full bg-[#0088cc] hover:bg-[#006da3] grid place-items-center text-[#e6f3fa] text-[22px] transition-colors animate-btn"
                >
                  <i className="icon-telegram text-inherit mr-[1px] mt-[1px]"></i>
                </button>

                <button
                  type={"button"}
                  className="h-10 w-10 rounded-full bg-[#ff0000] hover:bg-[#cc0000] grid place-items-center text-[#ffe6e6] text-[22px] transition-colors animate-btn"
                >
                  <i className="icon-youtube-icon text-inherit mt-[1.5px]"></i>
                </button>

                <button
                  type={"button"}
                  className="h-10 w-10 rounded-full bg-gradient-to-bl from-[#833AB4] hover:from-[#692e90] via-[#FD1D1D] hover:via-[#ca1717] to-[#FCB045] hover:to-[#ca8d37] grid place-items-center text-[#fff7ec] text-[22px] transition-colors animate-btn"
                >
                  <i className="icon-instagram text-inherit"></i>
                </button>

                <button
                  type={"button"}
                  className="h-10 w-10 rounded-full bg-inherit hover:bg-tertiary-900/50 grid place-items-center text-bronze-50 text-[28px] relative p-1 transition-colors animate-btn"
                >
                  <Image
                    width={50}
                    height={50}
                    src={mixins.X_ICON}
                    alt={"X Icon"}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="relative w-full h-full">
              <Image
                width={100}
                height={100}
                alt={"CORNFLOWER ELLIPSE"}
                draggable={false}
                src={mixins.BRONZE_ELLIPSE}
                className="absolute left-0 top-[58%] translate-y-[-58%] h-6 w-6 rounded-full z-[5]"
              />

              <Image
                width={100}
                height={100}
                alt={"CORNFLOWER ELLIPSE"}
                draggable={false}
                src={mixins.CORNFLOWER_ELLIPSE}
                className="absolute top-5 left-[65%] translate-x-[-65%] h-4 w-4 rounded-full z-[4]"
              />

              <Image
                width={50}
                height={50}
                alt={"ACE"}
                draggable={false}
                src={mixins.ACE}
                className="h-[100px] w-[180px] absolute top-[79.5%] translate-y-[-79.5%] left-[23%] translate-x-[23%] z-[3]"
              />

              <Image
                width={300}
                height={300}
                alt={"Happy Guy"}
                draggable={false}
                src={mixins.LAPTOP}
                className="absolute top-[70%] translate-y-[-70%] left-[9%] translate-x-[9%] z-[2]"
              />

              <Image
                width={350}
                height={350}
                alt={"Happy Guy"}
                draggable={false}
                src={mixins.HAPPY_GUY}
                className="absolute top-[-7%] translate-y-[-7%] z-[1]"
              />

              <div className="w-[400px] h-[400px] overflow-hidden rounded-full grid place-items-center absolute bottom-[-5%] translate-y-[5%] left-[-15%] -translate-x-[15%] z-0">
                <Image
                  fill
                  alt={"Primary Glow"}
                  draggable={false}
                  src={mixins.PRIMARY_ROUND_GLOW}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cornflower-bg bg-no-repeat h-[300px] w-[500px] absolute top-0 left-0 z-0"></div>

        <div className="bg-greater-than bg-no-repeat h-[300px] w-[500px] absolute top-[110%] translate-y-[-110%] left-0 z-0"></div>

        <div className="bg-info-round-bg bg-no-repeat h-[600px] w-[400px] absolute top-0 right-[-8%] z-0"></div>

        <Image
          width={30}
          height={30}
          alt={"primary Star"}
          draggable={false}
          src={mixins.PRIMARY_STAR}
          className="absolute right-[8%] bottom-[30%]"
        />
      </header>

      <div className="w-full relative h-1">
        <Image
          fill
          alt={"Divider"}
          src={mixins.DIVIDER}
          className="object-contain"
        />
      </div>

      <section className="flex flex-col items-center w-full relative">
        <div className="h-full w-[25%] bg-dark-info-glow bg-no-repeat absolute left-0 top-0"></div>
        <div className="h-full w-[25%] bg-amber-glow bg-no-repeat absolute right-0 top-0"></div>

        <div className="container flex flex-col gap-y-16 items-center text-bronze-content">
          <h4 className="text-5xl">What our Client Say About Us</h4>

          <div className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col lg:flex-row items-center px-6 lg:gap-x-12 justify-between h-28 rounded-xl border border-tertiary-100/15 bg-tertiary-500/30">
              <p className="font-nunito-sans italic inline">
                ‘‘ Working with Ace from Bullbear Mastery transformed my forex
                trading journey. Their expertise and support were invaluable.
                Highly recommend their services for success’’
              </p>

              <div className="relative object-contain w-2 h-full grid place-items-center">
                <Image
                  fill
                  alt={"Vertical Divider"}
                  src={mixins.VERTICAL_DIVIDER}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="flex flex-grow items-center gap-6 text-bronze-content">
                <div className="h-14 w-14 lg:h-16 lg:w-16 relative border border-bronze-content/20 rounded-full overflow-hidden">
                  <Image
                    fill
                    src={
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={"Avatar"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <h6 className="font-nunito-sans font-semibold text-sm lg:text-base text-nowrap">
                    Jerry Jones
                  </h6>
                  <p className="font-nunito-sans text-bronze-content/30 text-xs lg:text-sm text-nowrap">
                    Marketing Specialist
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="h-8 w-8 grid place-items-center font-semibold rounded-full text-lg bg-gradient-to-br from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-inner shadow-bronze-700/80 transition-colors animate-btn">
                <i className="icon-chevron-left text-inherit ml-[-2px]"></i>
              </button>

              <div className="flex-1 hidden lg:block relative h-2">
                <Image
                  fill
                  alt={"Divider"}
                  src={mixins.DIVIDER}
                  className="object-contain"
                />
              </div>

              <button className="h-8 w-8 grid place-items-center font-semibold rounded-full text-lg bg-gradient-to-br from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-content shadow-inner shadow-bronze-700/80 transition-colors animate-btn transition-colors animate-btn">
                <i className="icon-chevron-right text-inherit mr-[-2px]"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="container flex flex-col items-center gap-y-16 text-bronze-content">
          <div className="flex flex-col items-center gap-y-6">
            <h4 className="text-5xl">We Create Great Client Experience</h4>

            <p className="text-center text-xl">
              We offer great service and pass funded account challenges based on
              client’s terms and conditions. Our strategy ensures a 1:3 RR
              minimum and use good risk management techniques all to client’s
              benefit
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="col-span-2 grid place-items-center relative rounded-lg w-full h-full overflow-hidden">
              <Image
                fill
                src={mixins.ABSTRACT}
                alt={"Abstract Img"}
                className="object-cover absolute z-0 w-full h-full"
              />

              <div className="w-full h-full bg-tertiary absolute z-[1] opacity-30"></div>

              <p className="text-center font-bold font-open-sans text-4xl tracking-tight text-bronze-content absolute z-[2] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                Over 200+ <br />
                Happy Clients
              </p>
            </div>

            {infoList.map(({ src, heading, subheading }, index) => (
              <InfoCard
                key={index}
                src={src}
                heading={heading}
                subheading={subheading}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full relative">
        <div className="container flex flex-col gap-y-16 items-center text-bronze-content">
          <div className="flex flex-col items-center gap-y-6">
            <h4 className="text-5xl">Begin your journey to success</h4>

            <p className="text-center text-xl">
              Embark on your path to prosperity. Select your account type and
              size to kickstart your journey towards financial success. Let's
              make your dreams a reality
            </p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {pointList.map(({ heading, subheading, items, theme }, index) => (
              <ListCard
                key={index}
                items={items}
                theme={theme}
                heading={heading}
                subheading={subheading}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full relative">
        <div className="container flex flex-col gap-y-16 items-center text-bronze-content">
          <div className="flex flex-col items-center gap-y-6">
            <h4 className="text-5xl">Frequently Asked Questions</h4>

            <p className="text-center text-xl">
              Explore common questions below. Can't find what you're looking
              for? Feel free to reach out to us directly for personalized
              assistance.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <Accordion
              question="Am I new enough to this to benefit from the program?"
              answer={
                "This program is designed for aspiring prop traders with a foundational understanding of the forex market. We recommend some experience with basic technical analysis concepts."
              }
            />

            <Accordion
              question="What kind of challenges are there?"
              answer={
                "The program offers a variety of challenges, ranging from focused exercises on specific topics to comprehensive simulations that test your skills in building a complete trading strategy. Some challenges even offer the chance to win funded accounts!"
              }
            />

            <Accordion
              question="Do I have lifetime access to the course materials?"
              answer={
                "Yes! Whichever package you choose, you'll have lifetime access to the course content and all future updates."
              }
            />

            <Accordion
              question="Have a question not answered here?"
              answer={
                "No problem! Send us an email at support@bullbearmastery.com and we'll be happy to help."
              }
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full relative">
        <div className="container flex flex-col gap-y-16 items-center text-bronze-content relative z-[1]">
          <div className="flex flex-col items-center gap-y-4">
            <h4 className="text-5xl text-center">
              Stay Ahead of the Curve:{" "}
              <span className="text-bronze-400/90">
                Subscribe to the BullBear Mastery Newsletter
              </span>
            </h4>

            <p className="text-center text-xl">
              Get actionable insights and exclusive content delivered straight
              to your inbox.
            </p>
          </div>

          <List.UL>
            <List.Item
              type="line-up"
              iconClassName="text-[17px] text-transparent bg-gradient-to-br bg-clip-text from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-900"
            >
              <span className="font-bold">Market Moves & Analysis:</span> Twice
              a week, on Mondays and Thursdays, we'll keep you informed about
              the latest market trends and provide in-depth analysis to help you
              make informed trading decisions.
            </List.Item>

            <List.Item
              type="line-up"
              iconClassName="text-[17px] text-transparent bg-gradient-to-br bg-clip-text from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-900"
            >
              <span className="font-bold">Winning Strategies & Tips</span>{" "}
              Unlock valuable trading strategies, insightful tips, and
              downloadable cheatsheets to elevate your trading game.
            </List.Item>

            <List.Item
              type="line-up"
              iconClassName="text-[17px] text-transparent bg-gradient-to-br bg-clip-text from-bronze-400 via-bronze-500 to-bronze-800 text-bronze-900"
            >
              <span className="font-bold">Exclusive Content & Interviews:</span>{" "}
              Gain access to exclusive content and interviews with industry
              experts, providing a unique perspective on the financial markets.
            </List.Item>
          </List.UL>

          <div className="flex flex-col bg-cornflower-900 w-[90%] self-center rounded-7 py-14 px-6 relative overflow-hidden shadow-inner">
            <form
              onSubmit={() => {}}
              className="w-[80%] lg:w-[70%] 2xl:w-[60%] grid grid-cols-12 gap-y-8 self-center place-items-center"
            >
              <div className="col-span-12 w-full">
                <TextField
                  label="EMAIL ADDRESS"
                  type={"email"}
                  name="emailAddress"
                  role="textbox"
                  required
                />
              </div>

              <div className="col-span-12">
                <button
                  type="submit"
                  className="btn btn-info px-8 rounded-full uppercase hover:bg-primary hover:text-primary-content hover:border-primary focus:bg-primary-700 font-semibold tracking-[.01em] transition duration-[0.5s]"
                >
                  Subscribe & Level Up!
                </button>
              </div>
            </form>

            <div className="h-24 w-24 absolute top-[-10%] left-[-3%] bg-info-100/50 rounded-full"></div>
            <div className="h-32 w-32 absolute bottom-[-10%] right-[-5%] bg-info-200/40 rounded-full"></div>
            <Image
              src={mixins.CONFETTI}
              alt={"confetti"}
              width={250}
              height={250}
              draggable={false}
              className="left-[-9%] absolute bottom-[-30%] rotate-6"
            />
          </div>
        </div>

        <div className="absolute z-0 h-[50%] w-[50%] border top-0 right-0 bg-cover-top filter blur-3xl bg-no-repeat"></div>
      </section>

      <Footer />


      {/* MODALS */}
      <Modal
        name="auth-modal"
        hasTitle={false}
        visibility={authModalVisibility}
        setVisibility={setAuthModalVisibility}
      >
        {authModalType === "sign-up" && <SignUp />}
        {authModalType === "sign-in" && <SignIn />}
        {authModalType === "need-help" && <NeedHelp />}
      </Modal>
    </Fragment>
  );
};

export default Home;
