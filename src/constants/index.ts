import { staticImg } from "@/mixins";
import { TListCardProps } from "@/types";

export const infoList = [
  {
    src: staticImg.RESULT_DRIVEN_IMG,
    heading: "Results Driven",
    subheading: "Focused on achieving tangible success for our clients."
  },
  {
    src: staticImg.JET_IMG,
    heading: "Efficient",
    subheading: "Streamlining processes for swift results."
  },
  {
    src: staticImg.SUPPORT_IMG,
    heading: "Supportive",
    subheading: "Providing assistance every step of the way."
  },
  {
    src: staticImg.SHAPES_IMG,
    heading: "Personalized",
    subheading: "Customized solutions for individual needs."
  },
  {
    src: staticImg.BULB_IMG,
    heading: "Professional Team",
    subheading: "Clear communication and honesty throughout."
  },
  {
    src: staticImg.BOX_IMG,
    heading: "Affordable",
    subheading: "Streamlining processes for swift results."
  },
];

export const pointList: TListCardProps[] = [
  {
    theme: "yellow",
    heading: "Funded Account Mastered",
    subheading: "Unlock the potential of your funded trading account with our expert assistance. Our proven strategy boasts a high winning rate, aiming for at least 3% profit per week. Our fees are competitive and tailored to your account size, ensuring affordability.",
    items: [
      {
        icon: "custom",
        iconName: "icon-user-check",
        copy: "Expert guidance to navigate funded account challenges."
      },
      {
        icon: "line-up",
        copy: "Proven strategy with a high winning rate."
      },
      {
        icon: "custom",
        iconName: "icon-dollar-coin",
        copy: "Aim for a minimum 3% weekly profit."
      },
      {
        icon: "custom",
        iconName: "icon-tag",
        copy: "Competitive and affordable fees."
      },
      {
        icon: "custom",
        iconName: "icon-puzzle-piece",
        copy: "Customized fee structure based on account size."
      },
      {
        icon: "custom",
        iconName: "icon-lock-keyhole-unlocked",
        copy: "Unlock your trading potential with ease."
      },
    ]
  },
  {
    heading: "Profit Split Service",
    subheading: "Partner with us to trade your live prop firm account and share the profits! With a 40%-60% split in your favor, our success is your success. Experience the benefits of our expertise and enjoy a mutually rewarding partnership.",
    items: [
      {
        icon: "custom",
        iconName: "icon-sitemap",
        copy: "Collaborative trading approach for shared success."
      },
      {
        icon: "custom",
        iconName: "icon-dollar-coin",
        copy: "Favorable 40-60 profit split in client's favor."
      },
      {
        icon: "custom",
        iconName: "icon-trees",
        copy: "Opportunity to earn profits without actively trading."
      },
      {
        icon: "custom",
        iconName: "icon-magnifier",
        copy: "Leverage our expertise for profitable trading outcomes."
      },
      {
        icon: "custom",
        iconName: "icon-medal-ribbon-star",
        copy: "Enjoy a mutually rewarding partnership."
      },
    ]
  }
];

export const contacts = {
  mtn: "08165023064",
  airtel: "08087290322"
};

export const platform = "BBM Ace";

export const emptyStateCopy =
  "Currently no updates. Please try again later or explore other sections.";
export const emptyStateCopyTwo =
  "Nothing to display here at the moment. Check back later or try a different view.";

export const loadingStateMsg = "Please wait while we fetch your content...";
export const loadingStateMsgTwo = "Please wait while we spool your content...";

export const systemErrorMsg = "Something went wrong. Try again? If it persists, contact support.";

