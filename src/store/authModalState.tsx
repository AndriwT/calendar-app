import { atom } from "jotai";

// Using an enum for the modal views that we can reuse everywhere
// improves consistency and developer experience.
export enum AuthModalView {
  logIn = "singIn",
  signUp = "signUp",
  resetPassword = "resetPassword",
}

export interface AuthModalState {
  open: boolean;
  view: AuthModalView;
}

const defaultModalState: AuthModalState = {
  open: false,
  view: AuthModalView.logIn,
};

export const authModalState = atom<AuthModalState>(defaultModalState);
