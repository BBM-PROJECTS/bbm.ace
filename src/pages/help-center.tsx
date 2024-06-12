import { Footer, Toolbar } from "@/components/navigation";
import React, { Fragment } from "react";

const HelpCenter = () => {
  return (
    <Fragment>
      <Toolbar />

      <section className="w-full relative grid place-items-center shadow-inner mt-[15vh]">
        <div className="absolute z-10 w-full h-full bg-tertiary opacity-50"></div>

        <div className="section w-full relative z-20 text-info-content/90">
          <h3 className="text-info-200/90 self-center">
            How can we help you today?
          </h3>

          <p className="text-center">
            At <span className="font-bold">Bullbear Mastery (BBM)</span>, we're
            here to empower you in your forex trading journey. Whether you're a
            seasoned trader or just starting out, we have a variety of resources
            to help you achieve your goals.
          </p>
        </div>
      </section>
 
      <section className="section text-info-content/90  mx-auto">
        <h4>Explore Our Support Library</h4>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-8 2xl:gap-10 mt-6">
          <div className="w-full">
            <h4>Beginner Trader</h4>
            <h6 className="italic font-open-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              repellat.
            </h6>

            <div className="w-full flex flex-col gap-y-6 mt-10">
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80"> What is forex trading?</h5>
                <p>
                  Forex trading, also known as foreign exchange trading,
                  involves buying and selling currencies with the aim of
                  profiting from price movements.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">Is forex trading for me?</h5>
                <p>
                  Forex trading can be a rewarding opportunity, but it also
                  carries significant risk. Consider your financial goals, risk
                  tolerance, and available time before getting started.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  {" "}
                  What are the basic forex trading concepts I should learn?
                </h5>
                <p>
                  Key concepts include currency pairs, pip values, bid-ask
                  spreads, leverage, margin requirements, and different order
                  types.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  {" "}
                  Where can I find resources to learn more about forex trading
                  basics?
                </h5>
                <p>
                  Explore our library of beginner-friendly articles and
                  tutorials in the "Getting Started" section of our Support
                  Library.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h4>BBM Courses</h4>
            <h6 className="italic font-open-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              repellat.
            </h6>

            <div className="w-full flex flex-col gap-y-6 mt-10">
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What forex trading courses does Dynamia offer?
                </h5>
                <p>
                  BBM offers a variety of forex trading courses catering to
                  different experience levels and learning styles.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  How do I choose the right forex trading course for me?
                </h5>
                <p>
                  Consider your existing knowledge, learning goals, and
                  preferred learning format (video lectures, live sessions,
                  etc.) Each course description details its focus and target
                  audience.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What will I learn in a BBM forex trading course?
                </h5>
                <p>
                  Our courses cover a comprehensive range of topics, including
                  technical analysis, fundamental analysis, risk management,
                  trading strategies, and platform navigation.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  How do I enroll in a forex trading course?
                </h5>
                <p>
                  Visit our Courses page to explore the available options. Once
                  you've chosen a course, you can easily enroll through our
                  secure online platform.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h4>Investment Opportunities</h4>
            <h6 className="italic font-open-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              repellat.
            </h6>

            <div className="w-full flex flex-col gap-y-6 mt-10">
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What investment opportunities does BBM offer?
                </h5>
                <p>
                  BBM may offer investment opportunities that allow you to
                  participate in our trading activities (details outlined in
                  separate agreements).
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What are the benefits of investing with BBM?
                </h5>
                <p>
                  Potential benefits include gaining exposure to the forex
                  market through experienced traders and potentially earning
                  returns based on performance.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What are the risks involved in investing with BBM?
                </h5>
                <p>
                  Forex trading inherently carries risk of loss. You should
                  carefully consider your risk tolerance before investing.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  How do I learn more about BBM's investment opportunities?
                </h5>
                <p>
                  Contact our support team for detailed information and
                  eligibility requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h4>Prop Firm Challenge Support</h4>
            <h6 className="italic font-open-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              repellat.
            </h6>

            <div className="w-full flex flex-col gap-y-6 mt-10">
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What is a prop firm challenge?
                </h5>
                <p>
                  A prop firm challenge is a test designed by proprietary
                  trading firms to assess a trader's skills and suitability for
                  a funded account.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  How can BBM help me pass a prop firm challenge?
                </h5>
                <p>
                  BBM offers prop firm challenge support services, which may
                  include personalized coaching, strategy development, and
                  practice drills (details outlined in separate agreements).
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  What are the benefits of using BBM's prop firm challenge
                  support?
                </h5>
                <p>
                  Our support can help you increase your chances of success by
                  providing guidance and tailored strategies to tackle the
                  specific challenges.
                </p>
              </div>
              <div className="flex flex-col gap-y-3">
                <h5 className="text-info-200/80">
                  Who should consider BBM's prop firm challenge support?
                </h5>
                <p>
                  This service is ideal for experienced traders aiming to pass a
                  prop firm challenge and secure a funded account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-info-content/90 mx-auto">
        <h4>Still Can't Find What You're Looking For?</h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <div className="w-full p-10 space-y-6">
            <h5 className="text-info-200/80">Support Whatsapp</h5>
            <p>
              Get quick help with issues related to using the app, Chat with us
              on Whatsapp.
            </p>
            <button
              type="button"
              className="btn btn-info btn-sm hover:bg-primary active:bg-primary hover:text-primary-content active:text-primary-content hover:border-primary active:border-primary relative h-12 text-lg px-6 rounded-full font-normal transition-colors duration-300"
            >
              <span className="uppercase">Send a Message</span>
            </button>
          </div>
          <div className="w-full p-10 space-y-6">
            <h5 className="text-info-200/80">Follow us</h5>
            <p>
              Get quick help with issues related to using the app, Chat with us
              on Whatsapp.
            </p>
            <button
              type="button"
              className="btn btn-info btn-sm hover:bg-primary active:bg-primary hover:text-primary-content active:text-primary-content hover:border-primary active:border-primary relative h-12 text-lg px-6 rounded-full font-normal transition-colors duration-300"
            >
              <span className="uppercase">follow@bbm</span>
            </button>
          </div>
          <div className="w-full p-10 space-y-6">
            <h5 className="text-info-200/80">Contact us</h5>
            <p>
              Get quick help with issues related to using the app, Chat with us
              on Whatsapp.
            </p>
            <button
              type="button"
              className="btn btn-info btn-sm hover:bg-primary active:bg-primary hover:text-primary-content active:text-primary-content hover:border-primary active:border-primary relative h-12 text-lg px-6 rounded-full font-normal transition-colors duration-300"
            >
              <span className="uppercase">Contact us</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default HelpCenter;
