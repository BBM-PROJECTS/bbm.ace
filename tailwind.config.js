/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: "transparent",
  primary: {
    DEFAULT: "#e1306c",
    hover: "#cb2b61",
    content: "#fdf0f5",
    50: "#fceaf0",
    100: "#f6c1d3",
    200: "#f098b6",
    300: "#ea6e98",
    400: "#e4457b",
    500: "#e1306c",
    600: "#b42656",
    700: "#871d41",
    800: "#5a132b",
    900: "#2d0a16"
  },
  secondary: {
    DEFAULT: "#343434",
    hover: "#2f2f2f",
    content: "#f1f1f1",
    50: "#ebebeb",
    100: "#d4d4d4",
    200: "#bcbcbc",
    300: "#a5a5a5",
    400: "#8d8d8d",
    500: "#767676",
    600: "#5e5e5e",
    700: "#464646",
    800: "#2f2f2f",
    900: "#171717"
  },
  tertiary: {
    DEFAULT: "#0f0e10",
    hover: "#3A3A3A",
    content: "#e7e7e7",
    50: "#cfcfcf",
    100: "#b7b7b7",
    200: "#878788",
    300: "#575658",
    400: "#262626",
    500: "#272628",
    600: "#0f0e10",
    700: "#0E0E0E",
    800: "#181818",
    900: "#000000"
  },
  accent: {
    DEFAULT: "#f58a4d",
    hover: "#dd7c45",
    content: "#f1fafe",
    50: "#fef3ed",
    100: "#fcdcca",
    200: "#fac5a6",
    300: "#f8ad82",
    400: "#f6965f",
    500: "#f58a4d",
    600: "#c46e3e",
    700: "#93532e",
    800: "#62371f",
    900: "#311c0f"
  },
  info: {
    DEFAULT: "#1da1f2",
    hover: "#1a91da",
    content: "#f1fafe",
    50: "#e8f6fe",
    100: "#bbe3fb",
    200: "#8ed0f9",
    300: "#61bdf6",
    400: "#34aaf3",
    500: "#1da1f2",
    600: "#1781c2",
    700: "#116191",
    800: "#0c4061",
    900: "#062030"
  },
  danger: {
    DEFAULT: "#ff0000",
    hover: "#e60000",
    content: "#f1fafe",
    50: "#ffe6e6",
    100: "#ffb3b3",
    200: "#ff8080",
    300: "#ff4d4d",
    400: "#ff1a1a",
    500: "#ff0000",
    600: "#cc0000",
    700: "#990000",
    800: "#660000",
    900: "#330000"
  },
  success: {
    DEFAULT: "#38cd8e",
    hover: "#32b980",
    content: "#f1fcf7",
    50: "#ebfaf4",
    100: "#c3f0dd",
    200: "#9ce6c7",
    300: "#74dcb0",
    400: "#4cd299",
    500: "#38cd8e",
    600: "#2da472",
    700: "#227b55",
    800: "#165239",
    900: "#0b291c"
  },
  yellow: {
    DEFAULT: "#FFDC80",
    hover: "#e6c673",
    content: "#fffcf3",
    50: "#fffcf2",
    100: "#fff5d9",
    200: "#ffeec0",
    300: "#ffe7a6",
    400: "#ffe08d",
    500: "#FFDC80",
    600: "#ccb066",
    700: "#99844d",
    800: "#665833",
    900: "#332c1a"
  },
  cornflower: {
    DEFAULT: "#656ef4",
    hover: "#5b63dc",
    content: "#f5f5fe",
    50: "#f0f1fe",
    100: "#d1d4fc",
    200: "#b2b7fa",
    300: "#939af7",
    400: "#747df5",
    500: "#656ef4",
    600: "#5158c3",
    700: "#3d4292",
    800: "#282c62",
    900: "#141631"
  },
  bronze: {
    DEFAULT: "#cd7f32",
    hover: "#b9722d",
    content: "#fcf6f1",
    50: "#faf2eb",
    100: "#f0d9c2",
    200: "#e6bf99",
    300: "#dca570",
    400: "#d28c47",
    500: "#cd7f32",
    600: "#a46628",
    700: "#7b4c1e",
    800: "#523314",
    900: "#29190a"
  },
  silver: {
    DEFAULT: "#c0c0c0",
    hover: "#adadad",
    content: "#fafafa",
    50: "#f9f9f9",
    100: "#ececec",
    200: "#e0e0e0",
    300: "#d3d3d3",
    400: "#c6c6c6",
    500: "#c0c0c0",
    600: "#9a9a9a",
    700: "#737373",
    800: "#4d4d4d",
    900: "#262626"
  },
  gold: {
    DEFAULT: "#d4af37",
    hover: "#bf9e32",
    content: "#fcf9f1",
    50: "#fbf7eb",
    100: "#f2e7c3",
    200: "#ead79b",
    300: "#e1c773",
    400: "#d8b74b",
    500: "#d4af37",
    600: "#aa8c2c",
    700: "#7f6921",
    800: "#554616",
    900: "#2a230b"
  },
  platinum: {
    DEFAULT: "#96a8c5",
    hover: "#8797b1",
    content: "#f7f8fa",
    50: "#f5f6f9",
    100: "#e0e5ee",
    200: "#cbd4e2",
    300: "#b6c2d6",
    400: "#a1b1cb",
    500: "#96a8c5",
    600: "#78869e",
    700: "#5a6576",
    800: "#3c434f",
    900: "#1e2227"
  },
  diamond: {
    DEFAULT: "#f7ca9d",
    hover: "#deb68d",
    content: "#fcf9f1",
    50: "#fefaf5",
    100: "#fdefe2",
    200: "#fbe5ce",
    300: "#f9daba",
    400: "#f8cfa7",
    500: "#f7ca9d",
    600: "#c6a27e",
    700: "#94795e",
    800: "#63513f",
    900: "#31281f"
  },
  lemon: {
    DEFAULT: "#adf802",
    hover: "#8ac602",
    content: "#f7fee6",
    50: "#f7fee6",
    100: "#e6fdb3",
    200: "#d6fc81",
    300: "#c6fa4e",
    400: "#b5f91b",
    500: "#adf802",
    600: "#8ac602",
    700: "#689501",
    800: "#456301",
    900: "#111900"
  }
};

const custom = {
  primary: "#e1306c",
  "primary-content": "#fdf0f5",
  secondary: "#767676",
  "secondary-content": "#f1f1f1",
  accent: "#f58a4d",
  "accent-content": "#f1fafe",
  neutral: "#D2D7DB",
  "neutral-content": "#141414",
  "base-100": "#F8F8F8",
  "base-200": "#E6E7E8",
  "base-300": "#D4D6D7",
  "base-content": "#181818",
  info: "#1da1f2",
  "info-content": "#f1fafe",
  success: "#38cd8e",
  "success-content": "#f1fcf7",
  warning: "#ffb300",
  "warning-content": "#191200",
  error: "#ff0000",
  "error-content": "#180705"
};


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      "squada-one": ["Squada One", "Open Sans", "Segeo UI", "sans-serif"],
      "nunito-sans": ["Nunito Sans", "sans-serif"]
    },
    extend: {
      typography: () => ({
        css: {
          color: "#bcbcbc"
        }
      }),
      colors,
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))"
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16"
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.04em",
        tight: "-.01em",
        normal: "0",
        wide: ".02em",
        wider: ".04em",
        widest: ".1em"
      },
      borderRadius: {
        DEFAULT: "4px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px"
      },
      backgroundImage: {
        "divider": "url('/images/divider.svg')",
        "info-bg": "url('/images/info-glow.svg')",
        "amber-glow": "url('/images/amber-glow.svg')",
        "cover-top": "url('/images/bg-cover-top.svg')",
        "cover-left": "url('/images/bg-cover-left.svg')",
        "primary-glow": "url('/images/primary-glow.svg')",
        "abstract": "url('/images//images/abstract.webp')",
        "info-round-bg": "url('/images/info-round-glow.svg')",
        "dark-info-glow": "url('/images/dark-info-glow.svg')",
        "cornflower-bg": "url('/images/cornflow-top-glow.svg')",
        "primary-round-glow": "url('/images/primary-round-glow.svg')",
        "greater-than": "url('/images/greater-than-illustration.svg')"
      }
    },
  },
  daisyui: {
    themes: [{ custom }]
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}

