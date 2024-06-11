import { Key, ReactNode } from "react";

export type TAppLayoutProps = {
  children: ReactNode;
};

export type TChatPayload = {
  avatar: string;
  username: string;
  remark: string;
};

export type TChatPanelProps = {
  id: string;
  show: boolean;
  reverse?: boolean;
  isGradient?: boolean;
  positioning?: string;
  payload: TChatPayload;
  theme:
    | "info"
    | "primary"
    | "success"
    | "accent"
    | "yellow"
    | "danger"
    | "cornflower"
    | "gradient";
};

export type TWaveCardProps = {
  heading: string;
  content: string;
  hasEffect?: Boolean;
};

export type TPicture = {
  src: string;
  alt: string;
};

export type TTierCardProps = {
  cta?: string;
  title: string;
  points: string[];
  amount: string;
  type: "bronze" | "silver" | "gold" | "platinum" | "diamond";
};

export type TTierDetailProps = {
  amount: string;
  picture: TPicture;
  heading: string;
  points: string[];
  type: "bronze" | "silver" | "gold" | "platinum" | "diamond";
};

export type TListCardItem = {
  copy: string;
  iconName?: string;
  icon: "bullseye" | "candlestick" | "waterfall" | "line-up" | "custom";
}

export type TInfoCardProps = {
  src: string;
  heading: string;
  subheading: string;
}

export type TListCardProps = {
  key?: Key | null;
  heading: string;
  subheading: string;
  items: TListCardItem[];
  theme?:
    | "info"
    | "primary"
    | "secondary"
    | "accent"
    | "yellow"
    | "success"
    | "cornflower"
    | "danger";
};

export type TUListProps = {
  className?: string;
  children: ReactNode;
  iconName?: string;
  iconClassName?: string;
  contentClassName?: string;
  align?: "start" | "center";
  type?: "bullseye" | "candlestick" | "waterfall" | "line-up" | "custom";
  theme?:
    | "info"
    | "primary"
    | "secondary"
    | "accent"
    | "yellow"
    | "success"
    | "cornflower"
    | "danger";
};

export type TAccordionProps = {
  question: string;
  answer: ReactNode;
};
