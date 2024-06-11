export const routes = {
  ABOUT: "/about",
  DASHBOARD: "/dashboard",
  CONTACT_US: "/contact-us",
  HELP_CENTER: "/help-center",
  PRIVACY_POLICY: "/privacy",
  TERMS_OF_SERVICE: "/terms"
};

export const apiRoutes = {
  // AUTH
  TOKEN_MANAGER: "/auth/token-manager",
  USER_REGISTER: "/auth/register",

  // LOOKUP
  IP_DETAILS: "/lookup/ip-details",
  CHECK_USERNAME_AVAILABILITY: (queryParams: any) => {
    const queryString = new URLSearchParams(queryParams);
    return `/lookup/check-username-availability?${queryString}`
  },
  CHECK_EMAIL_VERIFICATION_STATUS: "/lookup/check-email-verification-status/:userId"
};
