import React, { Fragment } from "react";

// COMPONENT
import { Toolbar } from "@/components/navigation";
import { List } from "@/components/core";

const Privacy = () => {
  return (
    <Fragment>
      <Toolbar />
      <section className="section text-info-content mt-20">
        <h3>Bullbear Mastery (BBM) Privacy Policy</h3>
        <p>Last updated: March 31, 2023</p>
      </section>
      <section className="section text-info-content">
        {/* <h4>Introduction</h4> */}

        <p>
          Dynamia ("Dynamia", "we", "us", or "our") respects your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and store your personal
          information when you use our website, services, courses, and any other
          offerings provided by Dynamia (collectively, the "Services").
        </p>
      </section>
      <section className="section text-info-content">
        <h4>Information We Collect</h4>

        <List.UL>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            <p>
              <span className="font-semibold"> Personal Information: </span>
              {""} This includes information that can be used to identify you,
              such as your name, email address, phone number, mailing address,
              and date of birth.
            </p>
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            <p>
              <span className="font-semibold"> Financial Information: </span>
              This may include information related to your investment activity
              with Dynamia, such as account balances and transaction history
              (for investment opportunities).
            </p>
          </List.Item>{" "}
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            <p>
              <span className="font-semibold"> Trading Information: </span>
              {""} This may include your trading performance data and records
              used for prop firm challenge support and mentorship programs.
            </p>
          </List.Item>{" "}
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            <p>
              <span className="font-semibold"> Usage Data: </span>
              {""} This includes information about how you use the Services,
              such as the pages you visit, the courses you enroll in, and the
              resources you access.
            </p>
          </List.Item>{" "}
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            <p>
              <span className="font-semibold"> Device Information: </span>
              {""} This includes information about the device you use to access
              the Services, such as your IP address, browser type, and operating
              system.
            </p>
          </List.Item>
        </List.UL>
      </section>
      {/* 2 */}
      <section className="section text-info-content">
        <h4>How We Collect Information</h4>
        <h1 className="text-xl">
          We collect information from you in a variety of ways, including:
        </h1>
        <List.UL>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            When you create an account on the Services.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            When you enroll in a course or mentorship program.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            When you make a purchase or investment.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            When you contact us for support.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            When you use the Services, we may automatically collect certain
            usage data.
          </List.Item>
        </List.UL>
      </section>
      {/* 3 */}
      <section className="section text-info-content">
        <h4>How We Use Your Information</h4>
        <h1 className="text-xl">
          We may use your information for the following purposes:
        </h1>
        <List.UL>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To provide you with the Services and fulfill your requests.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To communicate with you about your account and the Services.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To personalize your experience with the Services.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To improve the Services.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To send you marketing communications, but you will always have the
            option to opt out of receiving these communications.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            To comply with legal and regulatory requirements.
          </List.Item>
        </List.UL>
      </section>
      {/* 4 */}
      <section className="section text-info-content">
        <h4>Disclosure of Your Information</h4>
        <h1 className="text-xl">
          We may disclose your information to the following third parties:
        </h1>
        <List.UL>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            Service providers who help us operate the Services, such as payment
            processors and data storage providers.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            Regulatory authorities, if required by law.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            {" "}
            Other third parties with your consent.
          </List.Item>
        </List.UL>
      </section>
      {/* 5 */}
      <section className="section text-info-content">
        <h4>Data Security</h4>

        <p>
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no internet
          transmission or electronic storage system is completely secure. We
          cannot guarantee the security of your information.
        </p>
      </section>
      {/* 6 */}
      <section className="section text-info-content">
        <h4>Your Choices</h4>
        <h1 className="text-xl">
          You have the following choices regarding your information:
        </h1>
        <List.UL>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            You can access and update your personal information in your account
            settings.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            You can unsubscribe from marketing communications by following the
            instructions in the communications.
          </List.Item>
          <List.Item
            type="bullseye"
            iconClassName="text-[17px] text-info-200/90"
          >
            You can request that we delete your information by contacting us.
          </List.Item>
        </List.UL>
      </section>
      {/* 7 */}
      <section className="section text-info-content">
        <h4>Data Security</h4>

        <p>
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no internet
          transmission or electronic storage system is completely secure. We
          cannot guarantee the security of your information.
        </p>
      </section>
      <section className="section text-info-content">
        <h4>Children's Privacy</h4>

        <p>
          The Services are not directed to children under the age of 18. We do
          not knowingly collect personal information from children under 18. If
          you are a parent or guardian and you believe that your child has
          provided us with personal information, please contact us.
        </p>
      </section>
      <section className="section text-info-content">
        <h4>International Transfers</h4>

        <p>
          Your information may be transferred to and processed in countries
          other than your own. These countries may have different data
          protection laws than your own country.
        </p>
      </section>
      <section className="section text-info-content">
        <h4>Changes to this Privacy Policy</h4>

        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated Privacy Policy on the Services. You are advised to
          periodically review the Privacy Policy for any updates.
        </p>
      </section>

      <style jsx>{`
        .text-info-content {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Fragment>
  );
};

export default Privacy;
