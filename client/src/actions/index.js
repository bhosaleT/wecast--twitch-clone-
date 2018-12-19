/* Action creators for signing in and signing out. */

import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
