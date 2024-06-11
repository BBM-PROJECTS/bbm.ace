import { atom } from "recoil";

const initialAuthState = {
  isLoggedIn: false,
  user: {
    email: '',
    username: '',
    phoneNumber: '',
  }
};

const initialAuthModalTypeState: 'sign-in' | 'sing-up' | 'need-help' | undefined = undefined;

const authAtom = atom({
  key: "authAtom",
  default: initialAuthState
});

const authModalTypeAtom = atom({
  key: "authModalType",
  default: initialAuthModalTypeState
})

const authModalVisibilityAtom = atom({
  key: "authModalVisibility",
  default: false
});

export { authAtom, authModalTypeAtom, authModalVisibilityAtom };