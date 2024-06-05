import React, { Fragment } from "react";

// PROVIDERS
import { useMixins } from "@/providers";

// NEXT IMAGE
import Image from "next/image";

// NAVIGATION COMPONENTS
import { Toolbar } from "@/components/navigation";

const Home = () => {
  const staticImg = useMixins();

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
              src={staticImg.LOUD}
              alt={"Loud Illustration"}
              className="absolute left-[62%] top-[29%] translate-x-[-62%] translate-y-[-29px]"
            />

            <Image
              priority
              width={90}
              height={90}
              src={staticImg.POINTER}
              alt={"Pointer Illustration"}
              className="absolute left-[100%] top-[24%] translate-x-[-100%] translate-y-[-24px]"
            />

            <p className="font-nunito-sans text-[22px] text-bronze-content">
              We're a skilled bunch of forex traders ready to help you breeze
              through those funded account challenges. Trust us with your
              account, and we'll stick with you every step of the way until you
              cash out with confidence!
            </p>

            <button className="btn btn-info text-info-content rounded-full uppercase px-8 py-4 h-auto font-open-sans font-semibold text-base">
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
                    src={staticImg.X_ICON}
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
                src={staticImg.BRONZE_ELLIPSE}
                className="absolute left-0 top-[58%] translate-y-[-58%] h-6 w-6 rounded-full z-[5]"
              />

              <Image
                width={100}
                height={100}
                alt={"CORNFLOWER ELLIPSE"}
                draggable={false}
                src={staticImg.CORNFLOWER_ELLIPSE}
                className="absolute top-5 left-[65%] translate-x-[-65%] h-4 w-4 rounded-full z-[4]"
              />

              <Image
                width={50}
                height={50}
                alt={"ACE"}
                draggable={false}
                src={staticImg.ACE}
                className="h-[100px] w-[180px] absolute top-[79.5%] translate-y-[-79.5%] left-[23%] translate-x-[23%] z-[3]"
              />

              <Image
                width={300}
                height={300}
                alt={"Happy Guy"}
                draggable={false}
                src={staticImg.LAPTOP}
                className="absolute top-[70%] translate-y-[-70%] left-[9%] translate-x-[9%] z-[2]"
              />

              <Image
                width={350}
                height={350}
                alt={"Happy Guy"}
                draggable={false}
                src={staticImg.HAPPY_GUY}
                className="absolute top-[-7%] translate-y-[-7%] z-[1]"
              />

              <div className="w-[400px] h-[400px] overflow-hidden rounded-full grid place-items-center absolute bottom-[-5%] translate-y-[5%] left-[-15%] -translate-x-[15%] z-0">
                <Image
                  fill
                  alt={"Primary Glow"}
                  draggable={false}
                  src={staticImg.PRIMARY_ROUND_GLOW}
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
          src={staticImg.PRIMARY_STAR}
          className="absolute right-[8%] bottom-[30%]"
        />
      </header>

      <div className="w-full relative h-1">
        <Image
          fill
          alt={"Divider"}
          src={staticImg.DIVIDER}
          className="object-contain"
        />
      </div>

      <section className="flex flex-col items-center w-full">
        <div className="container flex flex-col items-center text-bronze-content">
          <h4 className="text-4xl">What our Client Say About Us</h4>

          <div className="w-full mt-16">
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 rounded-xl border border-bronze-content/20 bg-tertiary-500/30">
              <p className="font-nunito-sans italic w-[70%]">
                ‘‘ Working with Ace from Bullbear Mastery transformed my forex
                trading journey. Their expertise and support were invaluable.
                Highly recommend their services for success’’
              </p>

              <div className="flex items-center gap-6 border-green-500 text-bronze-content">
                <div className="h-14 w-14 lg:h-16 lg:w-16 relative border border-bronze-content/20 rounded-full overflow-hidden">
                  <Image
                  fill
                    src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    alt={'Avatar'}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <h6 className="font-nunito-sans font-semibold text-sm lg:text-base">Jerry Jones</h6>
                  <p className="font-nunito-sans text-bronze-content/30 text-xs lg:text-sm">Marketing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
